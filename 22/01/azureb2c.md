# 登場人物の整理

登場人物は、とりあえずこれがわかりやすいので、これを見て下さい。

[一番分かりやすい OAuth の説明](https://qiita.com/TakahikoKawasaki/items/e37caf50776e00e733be) より
![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F106044%2F319dd4e8-72b7-1af2-8bed-645120196b47.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=4380ab1d49aad998abd1a1c9acdb37e0)

#### ・認可サーバー

⇒ ここが **_Azure B2C_** です。

#### ・クライアントアプリ

⇒ ここは普通の **_javascipt_** です。

#### ・リソースサーバー

⇒ ここは **_Azure Function_** です。

<br />

# 技術的な理解

AzureB2C を使ってれば安全なので大丈夫と思ってましたが、色々調べてみると、技術的に理解していないと、セキュリティホールを作ってしまうことになりそう。

- [一番分かりやすい OAuth の説明](https://qiita.com/TakahikoKawasaki/items/e37caf50776e00e733be)
- [OAuth 2.0 全フローの図解と動画](https://qiita.com/TakahikoKawasaki/items/200951e5b5929f840a1f)
- [一番分かりやすい OpenID Connect の説明](https://qiita.com/TakahikoKawasaki/items/498ca08bbfcc341691fe)
- [OpenID Connect 全フロー解説](https://qiita.com/TakahikoKawasaki/items/4ee9b55db9f7ef352b47)

**_↓ 今回作るのはこちらです。_**

[OpenID Connect 全フロー解説](https://qiita.com/TakahikoKawasaki/items/4ee9b55db9f7ef352b47)より
![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F106044%2F78829775-3a31-e2e6-bd06-821716169d8f.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=d1f1e1940e706f1e66e7b0abb2508ba8)

<br />

# 認可サーバー（AzureB2C）の設定

Azure B2C 自体の設定方法は、下記 の記事のとおりでほぼ問題ない。

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
[Azure Active Directory B2C でユーザー認証を超簡単に実装しよう](https://fwywd.com/tech/aadb2c-auth)

下記２点を除き、そのまま実施する。

- リダイレクト URI は、jwt.ms ではなく、アプリの URL にする
  ![](22/01/azureb2c-01.png)

- 認可コードで処理するので「リダイレクト先へのトークンの設定」は不要
  ![](https://kllc.github.io/blog/22/01/azureb2c-02.png)

<br />

# クライアントアプリの設定

## ライブラリの使い方

クライアントアプリで使えるライブラリ作りました。

https://kllc.github.io/repo/script/adb2cal.js

以下のパラメータを渡して使います。

```javascript
import ADB2CAL from "~/azureb2c";
const b2c = new ADB2CAL("ログインURL", "クライアントID", "Tokenエンドポイント");
```

## パラメータ説明

- ### ログイン URL

ユーザーフローから、ユーザーフローの実行を押して、エンドポイントをコピーします。

---

![](22/01/azureb2c-03.png)

- ### クライアント ID

AzureB2C の概要の以下の部分です。

---

![](22/01/azureb2c-04.png)

- ### Token エンドポイント

「アプリの登録」→「エンドポイント」を参考にします。
\<policy name\> の部分は、ユーザーフロー名です。

---

![](22/01/azureb2c-05.png)

## 実装方法

- ### ログイン URL への飛び方

```js
window.location.href = b2c.login();
```

- ### code から token の受け取り方

```js
const searchParams = new URLSearchParams(window.location.search);
// codeを受け取っていたらtokenを要求する
if (searchParams.has("code")) {
  await b2c.set_token(searchParams.get("code"));
}
```

- ### Authorization ヘッダー の設定
  トークンが取れない場合は false が返るので、ログイン画面などに遷移させる。
  b2c.config()は、{ headers: { Authorization: 'Bearer ' + id トークン } の形式で返却されます。

```js
const config = b2c.config();
if (config) {
  const res = await this.$axios.$post(
    "http://api.com/api",
    '{"data":"test"}',
    config
  );
  this.data = res;
} else {
  window.location.href = b2c.login();
}
```

- ### ID トークンのとり方

```js
const it = b2c.get_id_token();
```

- ### リフレッシュトークンのとり方（ログイン中かどうかの判定）

```js
const rt = b2c.get_refresh_token();
if (rt) {
  this.log_in = true;
}
```

<br />

# リソースサーバーの JWT トークン検証

## ライブラリの使い方

リソースサーバーで使えるライブラリ作りました。
この javascript を Azure Function にコピーします。

https://kllc.github.io/repo/script/jwtverify.js

以下 2 つをインストールします

```js
npm install --save jsonwebtoken
npm install --save jwks-rsa
```

以下のように使います。
エラーの場合ステータスとメッセージ。
成功の場合、ID トークンの中身が返却されます。

```js
const JwtVerify = require("./jwtverify.js");
const b2issuer = process.env.B2C_ISSUER;
const b2capplicationId = process.env.B2C_APPLICATION_ID;
const b2cJwksUri = process.env.B2C_JWKSURI;

const jv = new JwtVerify(b2issuer, b2capplicationId, b2cJwksUri);

module.exports = async function (context, req) {
  const res = await jv.jwt_verify(context, req);
  if (res.status != 200) {
    // token検証エラーの場合
    context.res = res;
    return;
  }
  // token検証成功の場合、IDTokenの中身が返却される
  const openID = res.body;
};
```

- B2C_ISSUER
- B2C_APPLICATION_ID
- B2C_JWKSURI

は、Azure Function の「構成」で指定するパラメータです。

## パラメータ説明

- ### B2C_ISSUER
  ユーザーフローから、プロパティを選択して、発行者要求のエンドポイントをコピーします。
  \<domain\>の部分は、AzureB2C テナントのドメイン名が入ります。

---

![](22/01/azureb2c-06.png)

- ### B2C_APPLICATION_ID

AzureB2C の概要の以下の部分です。（クライアントアプリのクライアント ID と同じ）

---

![](22/01/azureb2c-04.png)

- ### B2C_JWKSURI

以下のように組み立てます。

```
https://[テナント名].b2clogin.com/[テナントID]/[ユーザーフロー名]/discovery/v2.0/keys
```
