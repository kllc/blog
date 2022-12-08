export default () => {
  const index = [
    {
      src: "22/12/08auth.md",
      date: "22.12.08",
      title: "Microsoftのアカウントの二段階認証の回避方法",
      text: "二段階認証の回避をしたほうが便利なので、どうしてもやりたくなりますよね。",
      img: "https://cdn.clipkit.co/tenants/86/articles/images/000/000/295/large/bcd729ff-10ed-4d0d-9c46-f25f4389e61e.png?1532444921",
      topics: ["Azure Functions", "Cosmos DB"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/11/28cosmos.md",
      date: "22.11.28",
      title: "Cosmos DB をBindを使わずに操作する",
      text: "Azure Function のドキュメントには bind で取得する方法しか載っていないけど、Fucntion 内で計算された値をつかって、Cosmos DB を検索したかったのでその調査。",
      img: "https://www.rworks.jp/wp-content/uploads/2021/08/Azure-CosmosDB-c.png",
      topics: ["Azure Functions", "Cosmos DB"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/11/26powerpages.md",
      date: "22.11.26",
      title: "Power Pages の課金情報まとめ",
      text: "Power Pages の新しい従量課金がいまいちわかりにくかったので調査しました。",
      img: "https://powerpages.microsoft.com/pictures/pages/homePage/hero/Hero.jpg",
      topics: ["Power pages"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/11/1windows11.md",
      date: "22.11.1",
      title: "Windows 11 で nuxt generate できない",
      text: "PCを買い替えてWindows11になったら、nuxt generate できなくなって、ものすごいハマりました。",
      img: "https://byceclorets.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2022/08/22191029/nuxt3-%E7%94%BB%E5%83%8F.png",
      topics: ["Nuxt"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/10/27PowerPages/",
      anchor: true,
      date: "22.10.27",
      title: "Power Pages 勉強会",
      text: "22.10.27 に開催したPower Pages に関する勉強会の資料です",
      img: "https://images.ctfassets.net/6hm9tr1vnfzt/403pJQE91bU9lx0Niobvr0/985d6ff9dd3508f091186e301aedfdab/blade4_img_d.jpg",
      topics: ["Power Platform,Power Pages"],
    },
    {
      src: "22/10/26firebase.md",
      date: "22.10.26",
      title: "Firebasae というサービス",
      text: "スマホアプリの開発はほぼ初めてなので知らないことばっかりなんですが、Firebasae というサービスが便利らしいです。",
      img: "https://firebase.google.com/images/social.png",
      topics: ["Azure"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/10/25cors.md",
      date: "22.10.25",
      title: "Azure CLI で CORS設定",
      text: "Azure CLI なんていつ使うのと思ってましたが、CORS 設定を Azure CLI でやることがあるそうです。",
      img: "https://i0.wp.com/build5nines.com/wp-content/uploads/2022/07/Microsoft_Azure_CLI_Featured_Image_3b-2.jpg",
      topics: ["Azure"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/10/24nuxt.md",
      date: "22.10.24",
      title: "nuxtでデザインがおかしくなった",
      text: "ローカルで開発していたときは問題なかったのに、本番でみるとデザインがおかしくなってる。これは最悪ですよね。",
      img: "https://byceclorets.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2022/08/22191029/nuxt3-%E7%94%BB%E5%83%8F.png",
      topics: ["Nuxt"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "https://qiita.com/kllc/items/d865550e8af4d9b07a01",
      anchor: true,
      date: "22.10.19",
      title: "Nuxt３ で開発してみてハマったことレポート",
      text: "コピペエンジニアのレベルで Nuxt3 に取り組むと、結構ハマったのでそのレポートです。",
      img: "https://byceclorets.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2022/08/22191029/nuxt3-%E7%94%BB%E5%83%8F.png",
      topics: ["Nuxt"],
    },
    {
      src: "https://note.com/kllc/n/n5dbb147d4eb1",
      anchor: true,
      date: "22.10.17",
      title: "Nuxt２かNuxt３か",
      text: "自社で「Power Portal Framework(仮)」の開発を開始しようとおもって、昔のリポジトリをコピーして作ろうと思ったけど、 将来性を考えて、Nuxt2じゃなくて、Nuxt3で作ったほうが良さそうかなと思いました。",
      img: "https://byceclorets.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2022/08/22191029/nuxt3-%E7%94%BB%E5%83%8F.png",
      topics: ["Nuxt"],
    },
    {
      src: "22/09/08PowerPlatform.html",
      anchor: true,
      date: "22.9.8",
      title: "Power Platform リリース計画について",
      text: "Power Platform リリース計画について説明する勉強会です",
      img: "https://images.ctfassets.net/6hm9tr1vnfzt/403pJQE91bU9lx0Niobvr0/985d6ff9dd3508f091186e301aedfdab/blade4_img_d.jpg",
      topics: ["Power Platform"],
    },
    {
      src: "22/06/azurefunction.md",
      date: "22.6.30",
      title: "Java で Azure Functions を作る",
      text: "Azure Function を作る必要があったのですが、コピペ元が Java だったため、仕方なく Java で Azure Function を作ろうとしたらハマったのでその記録です",
      img: "https://i0.wp.com/gregorsuttie.com/wp-content/uploads/2021/08/azurefunctions.png?fit=321%2C157&ssl=1",
      topics: ["Functions"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/05/26委任勉強会.html",
      anchor: true,
      date: "22.5.26",
      title: "キャンバスアプリでSharePoint検索",
      text: "Power Apps キャンバスアプリ ＋ SharePoint の構成での、検索における委任の問題を、SharePoint Rest API を使用して解決する方法の紹介です。",
      img: "https://template-free.biz/wp-content/uploads/2021/08/1-e1630074416324-678x381-1630074455.jpg",
      topics: ["Power Platform"],
    },
    {
      src: "22/03/mimetype.md",
      date: "22.3.15",
      title: "MIME Type を Javascript で変更する",
      text: "ファイルがブラウザで開かれるか、ダウンロードされるかの動作を Javascrfipt だけで変更してみました",
      img: "https://p.e-words.jp/img/MIME.jpg",
      topics: ["MIME Type"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/02/rsa.md",
      date: "22.2.7",
      title: "RSA暗号を理解する",
      text: "RSA暗号を理解したかったのですが、RSA 暗号の入り口だけを理解することにしました。",
      img: "https://ssl.sakura.ad.jp/column/images/column_decoding-rsa@2x.png",
      topics: ["RSA"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/02/vm.md",
      date: "22.2.6",
      title: "Azure VM を別のテナントに移動",
      text: "Azure VM を別のテナントに移動したとき、ハマったポイントです。",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      topics: ["Azure", "VM"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/02/azureapp.md",
      date: "22.2.3",
      title: "Azure App Service の web.config 設定",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      topics: ["Azure", "App Service"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/01/azureb2c.md",
      date: "22.1.24",
      title: "Azure B2C での OpenID Connect による Web サインイン",
      text: "AzureB2Cを使った OpenID Connect による認証の設定方法まとめです。",
      img: "https://bloksec.io/assets/AzureB2C.png",
      topics: ["AzureB2C", "Azure", "javascript"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/01/module.md",
      date: "22.1.24",
      title: "ライブラリのModule化は難しい",
      text: "自分で作ったjavascriptライブラリを公開しようと思ったけど、node.js で使えるような、import でも使えるようにしたいし、普通に 外部サイト から読み込めるようにもしてみたい。",
      topics: ["javascript", "module"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/01/vantana.md",
      date: "22.1.17",
      title: "背景画像",
      text: "ランディングページの背景画像にいいかも",
      img: "https://i.gzn.jp/img/2022/01/16/vanta/00_m.png",
      topics: ["background", "image"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/01/emoji.md",
      date: "22.1.17",
      title: "画像に困ったとき",
      text: "ブログとかでアイキャッチ画像に困っとき手軽にコピーできる一覧",
      img: "https://twemoji.maxcdn.com/v/13.1.0/svg/1f472.svg",
      topics: ["free", "emoji", "twitter", "image"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/01/education.md",
      date: "22.1.11",
      title: "ネットで見つけた無料学習教材を紹介",
      text: "ネットで見つけた無料学習教材をメモしておきました。時間があるときにやってみたい。",
      img: "https://twemoji.maxcdn.com/v/13.1.0/svg/1f193.svg",
      topics: ["free", "javascript", "python", "dynamics"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "22/01/markdown-blog.md",
      date: "22.1.9",
      title: "マークダウンをPushしたら、GitHub Pagesにブログができたら便利",
      text: "markdown で記事を作成して、github にプッシュしてそのままブログになったら便利かなと思いました。昨年初めて触った Vue.js を利用した自由研究です。",
      img: "https://twemoji.maxcdn.com/v/13.1.0/svg/2603.svg",
      topics: ["vue.js", "vuetify", "marked.js", "highlight.js", "Tocbot"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
    {
      src: "encode.html",
      anchor: true,
    },
    {
      src: "https://blog.kllc.jp/",
      anchor: true,
      date: "22.1.1",
      title: "以前のブログ",
      text: "以前はhatena blogで作成していました。以前のブログはこちらからご覧下さい。",
      img: "data:image/png;base64,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",
    },
    {
      src: "21/12/26blog/",
      anchor: true,
      date: "21.12.26",
      title: "速く合同会社を作るための雛形資料",
      text: "たまに聞かれることがあるので、速く合同会社を作るのに必要なものを整理しておきます。雛形は、個人１人で合同会社を作る場合です。",
      img: "https://assets.st-note.com/production/uploads/images/68526104/rectangle_large_type_2_d120f6a758a4a2ec22302acee30dd76c.jpeg?width=800",
      topics: ["事務"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "コピペエンジニアです",
      },
    },
  ];
  return index;
};
