# ハマったポイント

Azure Function を作る必要があったのですが、コピペ元が Java だったため、仕方なく Java で Azure Function を作ろうとしたらハマったのでその記録。

ハマったのは２つ

- Maven のインストール
- Path の登録

Maven って、便利なライブラリみたいなものかなと思ってインストール不要かと思いましたが必要なものみたいです。
ビルドツール的なものかな。

# 設定方法など

1. Java インストール
   https://www.oracle.com/java/technologies/downloads/
   Java インストールは簡単でした。
   Azure Function でサポートされているバージョンで、Windows のタブからダウンロードして、インストール。

1. Maven インストール
   https://maven.apache.org
   悩みました。
   Maven は、インストーラーがないので、ダウンロードして解凍して、フォルダにおくという感じです。
   <img src="./22/06/azurefunction00.png" loading="lazy" height="200" style="object-fit:contain"></img>

1. Path の登録
   環境変数で Path を登録しておかないといけないようです。
   めっちゃ検索して、以下の記事にたどり着いて解決しました。
   Stack overflow：[maven-isnt-installing-correctly](https://stackoverflow.com/questions/51606262/maven-isnt-installing-correctly)
   設定内容の画像を貼っておきます。

<img src="./22/06/azurefunction01.png" loading="lazy" height="800" style="object-fit:contain"></img>
<img src="./22/06/azurefunction02.png" loading="lazy" height="800" style="object-fit:contain"></img>
<img src="./22/06/azurefunction03.png" loading="lazy" height="800" style="object-fit:contain"></img>
<img src="./22/06/azurefunction04.png" loading="lazy" height="800" style="object-fit:contain"></img>
<img src="./22/06/azurefunction05.png" loading="lazy" height="800" style="object-fit:contain"></img>
