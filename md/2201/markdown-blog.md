# 冬休みの自由研究テーマ

markdown で記事を作成して、github にプッシュしてそのままブログになったら便利かなと思いました。
昨年初めて触った Vue.js を利用した自由研究です。
宿題提出遅れてすいません。

## 成果物

出来上がったもの
https://kllc.github.io/markdown-blog/

ソース一式
https://github.com/kllc/markdown-blog

## 使い方

GitHub Pages を、Source は root で設定してぜひ使ってみて下さい。

- markdown で記事を作成して、github にプッシュする。
- index.js にその記事の パス（src） とその他属性情報を書く。
  - 必須入力は、**src** のみ、その他は任意

```javascript
// index.js
export default () => {
  const index = [
    {
      src: "md/sample1.md", // ここだけ必須
      date: "22.1.1",
      title: "Sample",
      text: "text text text",
      img: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
      topics: ["vuetify", "markdown"],
      author: {
        name: "k",
        avatar: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
        message:
          "vuetify sample. https://store.vuetifyjs.com/products/parallax-theme-free",
      },
    },
    {
      src:"md/sample2.md" // これだけでも動きます。
    },
    :
  ];
  return index;
};
```

## 目指したこと

- 社内外の知識共有を、無料で簡単に VSCode だけで使って発信可能にする。
  - そのために、Github Pages を使う。
- [Zenn](https://zenn.dev/) みたいなデザインにする。

# 研究で何をしたか（使った技術）

[Vue.js](https://jp.vuejs.org/index.html)
[Vuetify](https://vuetifyjs.com/ja/)
⇒ 　デザイン面が作りやすいので去年知った Vue js を利用

[Marked](https://github.com/markedjs/marked)
⇒ 　マークダウンを HTML に変換するライブラリ

[highlight.js](https://highlightjs.org/)
⇒ 　 Code を VSCode のようにハイライト表示する

[Tocbot](https://tscanlin.github.io/tocbot/)
⇒ 　 自動的に目次をつける

## npm/yarn で導入する か CDN か

各 javascript ライブラリは、CDN で導入しています。  
Vue.js の場合、他のライブラリは npm で導入しないと上手く動かないことがあるので、npm/yarn のほうがいいと思うのですが、GitHub Pages でホストする場合、ソースファイルがシンプルになる CDN のがいいかなと思いました。

全部 CDN で導入したので、以下のようになります。

```html
<link
  href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/vs2015.min.css"
/>
```

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked@3.0.7/marked.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/languages/vbnet.min.js"></script>
```

# 研究でわかったことや思ったこと

## Vue.js

昨年はじめて触ったんですが、Vue.js ってすごい。めっちゃ好きになりました。
React も Angular も触ったことないですが、Vue.js が簡単だと聞きます。
むかし、PHP か Perl かって議論では圧倒的に Perl のが偉いって感じだったように思いますが、結局今 PHP 案件のほうが多いのは、簡単な方が生き残るからだと思います。
でも、JQuery と仲が悪くて、喧嘩して JQuery を動けなくしちゃうのは良くない。

## Vuetify

今回はじめて触りました。気に入りました。
Bootstrap みたいなグリッドシステムもいいし、v-card とかもいい感じ。
でも v-row と v-col で、サイド固定幅メイン可変幅にするやり方が分からなかった。
結局直接計算して指定。

```html
<v-card
  elevation="2"
  class="pa-4 mb-2"
  :style="'width:' + side_width + ';'"
></v-card>
```

```javascript
side_width() {
  if (this.clientWidth > 1280 - 16) {
    return "310px";
  } else {
    return "100%";
  }
},
```

## Marked

今回の研究テーマはここがメインだけど、簡単すぎて拍子抜け。
コピペしたら動きました。もっと流行っても良さそう。

```javascript
const res = await axios.get(this.blogprop.src);

marked.setOptions({
  breaks: true,

  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
});
this.bloghtml = marked(res.data);
```

## highlight.js

code のハイライト表示は最初やるつもりなかったけど、Zenn に合わせるならあったほうがいい。
でも結構ハマった。
レンダリングされたあとの HTML に対して Class をつけるような処理をするらしく、JQuery と同じく、Vue.js と相性が悪い。
今回知ったのは、DOM が更新されたあとに動く this.$nextTick
もっと早く知ってればよかったなぁ。
https://qiita.com/miyauchoi/items/73fa77f65b88214d9dba

でも、それだけでも上手く行かなかった。
highlight-js の読み込みは、以下のように書くといいらしい。
https://stackoverflow.com/questions/13094541/how-to-reinitialize-highlight-js

```javascript
watch: {
  bloghtml: function (val) {
    this.$nextTick(function () {
      hljs.initHighlighting.called = false;
      hljs.initHighlighting();
    });
  },
},
```

## Tocbot

Zenn や Qiita みたいに、目次を付けられる機能。
https://errormaker.blog.fc2.com/blog-entry-52.html

こちらは思ったより簡単だったけど、ヘッダーがかぶさっちゃうので、目次をクリックして移動したときにそこがヘッダーに隠れてしまう。
CSS で解決するといいらしいですが、でもその代わり、margin-top と padding-top が使えなくなる。しょうがないか。
https://www.tam-tam.co.jp/tipsnote/html_css/post4776.html

```html
<style>
.content h1,
.content h2,
.content h3 {
  margin-bottom: 16px;
  margin-top: -100px;
  padding-top: 100px;
}
```

## 画像

Zenn みたいに、画像が設定されないとき、自動的に画像が設定されたら簡単でいいなと思って調べたら、Zenn は Twemoji という、twitter で使える emoji を使っているみたい。
この一覧を取得してランダムに設定すればいいかと思ったけど、同じ名前なら同じアバターが設定されるとより良いかなと思い、名前から計算される数値を作り、その数値で emoji を設定することにしました。
我ながら良いアイデア。コピペで簡単に動いた。
https://qiita.com/_shimizu/items/eb6834f255d76b1ed8cf
https://stackoverflow.com/questions/61634063/generate-deterministic-hash-number-between-0-and-1-from-string

```javascript
image(text) {
  return this.emojis[
    Math.floor(this.decimalHash(text) * this.emojis.length)
  ];
},
decimalHash(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++)
    sum += ((i + 1) * string.codePointAt(i)) / (1 << 8);
  return sum % 1;
},
```

## 広告

誰かに使ってもらう前提で、あとからでも変更可能な埋め込み広告エリアを設定してみた。
ad.js を変更すれば、いつでも埋め込まれた html を変更できる。

```html
<span v-html="ad"></span>
```

```javascript
import ad from "https://kllc.github.io/repo/script/ad.js";
```

```javascript
data() {
  return {
    ad: ad(),
};
```

# 最後に

markdown をプッシュすると、Github Pages でホストされるブログができる。
めちゃくちゃ便利。最高。
これから機能を追加していこう。検索機能は作りたい。簡単にできるはず。

他の機能も順次・・って思ったけど、よく考えたら、閲覧回数とか、コメント機能とか、いいねとか。
そういったブログの基本機能は静的サイトじゃ無理ですね。

じゃあブログじゃないやん。。
