# Dynamics を Web から使う方法

Dyanmics Web API というのがあって、それを使うと接続できます。
[Dynamics Web API](https://github.com/AleksandrRogov/DynamicsWebApi)

## 事前準備

こちらの記事の、Add security roles までを実施します。
[アプリケーションユーザーの作成](https://readyxrm.blog/2020/10/30/how-to-setup-a-common-data-service-application-user-and-why/)

# ライブラリ作りました

Azure Function で API を作るときに、もう少し簡単に使えるライブラリ作りました。

https://kllc.github.io/repo/script/dynamicsapi.js

## ライブラリの使い方

以下 2 つをインストールします

```js
npm install --save @azure/msal-node
npm install --save dynamics-web-api
```

以下のように使います。

```js
const DynamicsApi = require("./dynamicsapi.js");
const resource = process.env.DYNAMICS_RESOURCE;
const authorityUrl =
  "https://login.microsoftonline.com/" + process.env.TENANT_ID;
const applicationId = process.env.APPLICATION_ID;
const secretValue = process.env.SECRET;

const da = new DynamicsApi(resource, authorityUrl, applicationId, secretValue);

module.exports = async function (context, req) {
  const res = await da.dynamicsWebApi.retrieveRequest(req.body.request);
  context.res = {
    status: 200,
    body: res,
  };
};
```

- DYNAMICS_RESOURCE
- TENANT_ID
- APPLICATION_ID
- SECRET

は、Azure Function の「構成」で指定するパラメータです。

## パラメータ説明

- ### DYNAMICS_RESOURCE
  環境の URL です。
  https://<テナント名>.crm7.dynamics.com

---

- ### TENANT_ID,APPLICATION_ID
  ![](22/02/dynamicsapi-01.png)

---

- ### SECRET
  ![](22/02/dynamicsapi-02.png)
