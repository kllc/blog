# 冬休みの自由研究テーマ

markdown で記事を作成して、github にプッシュしてそのままブログっぽくなったら便利かなと思いました。
昨年初めて触った Vue.js を利用した自由研究です。

出来上がったもの
https://kllc.github.io/markdown-blog/

ソース一式
https://github.com/kllc/markdown-blog

# 研究で何をしたか（導入した技術）

Vue.js
Vuetify
⇒ 　デザイン面が作りやすいので去年知った Vue js を利用

marked
⇒ 　マークダウンを HTML に変換するライブラリ

[highlightjs](https://highlightjs.org/)
⇒ 　 Code を VSCode のようにハイライト表示する

Tocbot
⇒ 　 自動的に目次をつける

## npm/yarn で導入する か CDN か

各 jacascript ライブラリは、CDN で導入しています。  
Vue.js の場合、他のライブラリは npm で導入しないと上手く動かないことがあるので、npm/yarn のほうがいいと思うのですが、GitHub Pages でホストする場合、ソースファイルがシンプルになる CDN のがいいかなと思いました。

全部 CDN で導入したので、以下のようになります。

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

大好き。
フロントエンジニアではないので、React も Angular も触ったことないですが、初心者ばかりのプロジェクトでも成果を上げることができました。
むかし、PHP か Perl かって議論で圧倒的に Perl が人気だったように思いますが、結局今は PHP 案件のが多いですよね。
簡単な方が生き残ると思います。

## Vuetify

気に入りました。
Bootstrap みたいなグリッドシステムもいいし、V-card とかも雰囲気がいい。
でも v-row と v-col で、サイド固定幅メイン可変幅にするやり方が分からなかった。

```javascript
side_width() {
  if (this.clientWidth > 1280 - 16) {
    return "310px";
  } else {
    return "100%";
  }
},
```

# 課題

- だいぶ時間かけて Style いじったけど、もう少し変更必要かな。
