export default () => {
  const index = [
    {
      src: "22/01/education.md",
      date: "22.1.11",
      title: "ネットで見つけた無料学習を紹介",
      text: "ネットで見つけた無料学習をメモしておきました。時間があるときにやってみたい。",
      img: "https://twemoji.maxcdn.com/v/13.1.0/svg/1f193.svg",
      topics: ["free", "javascript", "python", "dynamics"],
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "叩き上げのコピペエンジニアです。",
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
        message: "叩き上げのコピペエンジニアです。",
      },
    },
    {
      src: "https://blog.kllc.jp/",
      anchor: true,
      date: "22.1.1",
      title: "以前のブログ",
      text: "以前はhatena blogで作成していました。以前のブログはこちらからご覧下さい。",
      img: "https://kllc.github.io/repo/img/kllclogo.svg",
    },
  ];
  return index;
};
