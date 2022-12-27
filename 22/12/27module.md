# type=module で作った script でハマった話

外部の script を読み込んで実装するとき、type module にしないといけないと思うのですが、そうすると、グローバル変数が使えない。

アンチパターンなのかもですが、Vue の v-html のなかに、javacript を記述するとき、グローバル変数がないと困るのですが、どうやったらいいか調べたら結構時間かかった。

https://medium.com/codex/global-variables-and-javascript-modules-ce674a869164

なんで日本語の記事がないんだろう。
当然みんな知ってるからなのか、アンチパターンすぎて誰もやらないのか。

以下のいすれかだそうです。
手数的に、self が一番良さそう。

```
window.ONE = 1;
self.TWO = 2;
globalThis.THREE= 3;
```
