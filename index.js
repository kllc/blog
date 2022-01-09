export default () => {
  const index = [
    {
      src: "md/2201/markdown-blog.md",
      date: "22.1.9",
      title: "マークダウンをPushしたら、GitHub Pagesにブログができたら便利",
      text: "markdown で記事を作成して、github にプッシュしてそのままブログになったら便利かなと思いました。昨年初めて触った Vue.js を利用した自由研究です。",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FA6mr7QQivDJBy1p__ibMGnLIM-1zLgAtw&usqp=CAU",
      topics: ["vuetify"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message:
          "叩き上げのコピペエンジニアです。普段は多重請負の最下層におります。",
      },
    },
    {
      src: "md/sample/sample1.md",
    },
  ];
  return index;
};
