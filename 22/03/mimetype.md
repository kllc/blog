# MIME Type の設定方法

ファイルがブラウザで開かれるか、ダウンロードされるかの動作を変更したいけど、サーバ側から送られる MIME Type によるので、Javascrfipt だけではどうにもならないかなと思ってましたが、無理やり変更する方法見つけました。

まずは、Blob にダウンロードして

参考：[convert-url-to-blob](https://stackoverflow.com/questions/25046301/convert-url-to-file-or-blob-for-filereader-readasdataurl)

```
  let response = await fetch('https://･･･');
  let data = await response.blob();
```

application/pdf の Blob を生成して開く

参考：[pdf-blob-pop-up](https://stackoverflow.com/questions/21729451/pdf-blob-pop-up-window-not-showing-content)

```
  var file = new Blob([data], {type: 'application/pdf'});
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
```

ハマった点は、Blob は読み取り専用で変更できないので、もう１個インスタンスを作るしか無いということ。
そういうもんなんですね。

参考：[set-content-type-on-blob](https://stackoverflow.com/questions/18998543/set-content-type-on-blob)
