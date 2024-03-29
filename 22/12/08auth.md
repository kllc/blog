# 二段階認証を回避する方法

やってはいけないのですが、やる方法は以下です。
<br /><br />

- Azure Portal にログインして Azure Active Directory 　を選択

<img src="22/12/08-3.png" height="300" style="object-fit:contain" />

<br /><br />

- プロパティ　＞　セキュリティ既定値の管理 を選択

<img src="22/12/08-4.png" height="600" style="object-fit:contain" />

<br /><br />

- セキュリティ既定値の有効化 を　「いいえ」　に変更

<img src="22/12/08-5.png" height="600" style="object-fit:contain" />

<br /><br />

# Azure AD の全体管理者の二段階認証の回避は絶対やってはいけない

全体管理者は、二段階認証を必ず設定すべきです。  
試用版であったとしても、非常に危ないです。

## 本当にあった怖い話

試用版でしばらく検証などに使っていた環境を、そのまま開発環境に昇格することはよくあると思いますが、  
以下のような簡単なテナント名で設定していて

```
test20221208.onmicrosoft.com
```

簡単なユーザー名

```
admin@test20221208.onmicrosoft.com
```

簡単なパスワード

```
p@ssw0rd
```

で設定してしいたところ・・  
それぞれを推測されてしまい、不正にログインされました。
しかも、Azure 上にものすごく高価な仮想マシンを作られてしまい、おそらく仮想通貨のマイニングに使われていました。

せめて週１回は課金情報を確認しておくべきだったのですが、１ヶ月以上利用されたあと、高額な請求に気づきました。  
結局引き落としが行われることになります。  
しかも、客先のクレジットカードでした。

```
本件に関する内容について、現在引き続き複数の関連部門にて調査を進めている状況でございます。
しかしながら、現時点で明確な内容の確認までには至っておりません。

また、2021 年 7 月 6 日 に今回のご請求金額の [1,747,657 円] のお支払いが、完了していることをシステム上確認いたしました。
上記内容を含めて、可能な限り迅速に対応をおこなってまいります。

お忙しいところ恐縮ですが、調査完了まで今しばらくお待ちいただけますようお願い申し上げます。
```

二段階認証の回避は一生しないことを誓いました。

# 二段階認証の回避をすると

二段階認証の回避をするとこのメッセージが出なくなります。  
出ないほうが便利なのでどうしてもやりたくなりますよね。

<img src="22/12/08-1.png" height="600" style="object-fit:contain" />
