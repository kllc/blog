# Module の作り方

自分で作ったライブラリを公開しようと思ったけど、node.js で使えるような、import でも使えるようにしたいし、普通に 外部サイト から読み込めるようにもしてみたい。
とおもって、調べてみたら・・
奥が深い。
というか、理解できると思えない。。

モジュールについて説明された有名な記事の翻訳記事

[[意訳]初学者のための JavaScript モジュール講座 Part1](https://qiita.com/chuck0523/items/1868a4c04ab4d8cdfb23)

を読んでもわからないんだけど、、
書いてあるソースをコピペしても動かないし・・・

## 少しわかったこと

- CommonJS の呼び出し方
- AMD の呼び出し方

があって、

- それらを統合したものが、UMD

で、それらは、割と新しい、

- ES6 Module とは違う

というところまで理解するのに、2 日くらいかかったかな。

私がやりたかったのは、
Jquery みたいに、CDN から読み込んでそのまま使える状態と、import XXX from 'XXX' でインポートできる状態を共存させたい。

[ES6 (ES2015) Modules の UMD 化。HTML の Script 要素と ES6 import での同時読み込みに対応させる方法](https://mae.chab.in/archives/2849)

この記事を読んで、作ったみたけど上手く動かない。
この記事は、Babel でトランスパイルする前提だからなんかな。。

少し手を入れてみました。
そして以下のコードになりました。
とりあえず動くようになりました。

一旦、Module 化はこれくらいで勘弁してください。難しすぎる。
めっちゃ時間使いました。

```javascript
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    global.EXPORT_CLASS_NAME = factory();
  }
})(this, function () {
  // ここに書いていく
  function PRIVATE_FUNCTION() {
    // 内容
  }
  class EXPORT_CLASS_NAME {
    // 内容
  }
  return EXPORT_CLASS_NAME;
});
```
