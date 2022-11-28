# bind を使わずに Cosmos DB からデータを取得

Azure Function で、Form でポストされた情報をもとに、Cosmos DB のデータを取得したいが、Azure Function のドキュメントには bind で取得する方法しか載っていない。  
bind で取得する方法は、リクエストパラメータを条件にすることはできるが、Fucntion 内で計算された値をつかって、Cosmos DB を検索することができない。

ではどうすればよいか。  
奇跡的に記事を見つけました。

[見つけた記事](https://www.simpletraveler.jp/2021/09/02/microsoftazure-functions-nodejs-delete-cosmosdb-document/)

以下のようにするらしいです。
CosmosClient というやつを使います。

```javascript
const CosmosClient = require("@azure/cosmos").CosmosClient;

module.exports = async function (context, req) {
  const cc = new CosmosClient(process.env.CosmosDbConnectionString); // 接続文字列を入れる
  const db = cc.database("DB 名を入れる");
  const con = db.container("コンテナ名を入れる");
  const res = await con
    .item("ID を入れる", "パーティションキーを入れる")
    .read();

  context.res = {};
};
```
