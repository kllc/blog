---
marp: true
theme: base
style: |
  section {
      background-color: white;
      font-family: 'Noto Sans JP Light','Yu Gothic UI';
      color: #236;
  }
  section.top {
      background-color: RGB(26, 13, 171);
      background-size: 120px;
      background-repeat: no-repeat;
      background-position: bottom 10px right 10px;
      color: #fff;
      font-size:4em;
      font-weight:bold;
  }
  section.title {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><rect width='480' height='720' fill='RGB(26, 13, 171)'/></svg>");
      color:#fff;
      padding-left :40px;
      font-family: 'Noto Sans JP Regular','Yu Gothic UI';
  }
  section.slides {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='680px' height='230px' preserveAspectRatio='none'><path d='M130,0l-70,110l70,110l50,0l-70,-110l70,-110H0Z' transform='translate(0 5)' fill='RGB(204,204,204)'/><path d='M0,0l0,220l50,0l0,-47.14285714l-40,-62.85714286l40,-62.85714286l0,-47.14285714H0Z' transform='translate(0 5)' fill='RGB(0,0,0)'/><path d='M50,0l0,47.14285714l30,-47.14285714H0Z' transform='translate(0 5)' fill='RGB(204,204,204)'/><path d='M50,220l0,-47.14285714l30,47.14285714H0Z' transform='translate(0 5)' fill='RGB(204,204,204)'/><text id='LLC' transform='translate(180 226)' font-size='316' font-family='SegoeUI-Bold, Segoe UI' font-weight='700'>LLC</text></svg>");
      background-repeat: no-repeat;
      background-position: top 10px right 10px;
      background-size: 220px;
  }
  section.eof {
      background-image: none;
      font-family: 'Noto Sans JP Regular','Yu Gothic UI';
      color: #000;
      text-align: center;
  }
  section.none {
      display:none;
  }
  h1, h2 ,h3, h4 ,h5, h6 {
      line-height:0px;        
      font-family: 'Noto Sans JP Regular','Yu Gothic UI';
  }
  h1 {
      position : absolute;
      top: 40px;
      left: 20px;
      line-height:0px;
      color: #118;
  }    
  h6 {
      text-align: right;
      line-height:0px;
      color: #236;
  }
  code {
      background-color: #FF6;
      font-family: 'Noto Sans JP Light','Yu Gothic UI';
  }
---

<!--　class: top -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
$('a').attr({'target':'_blank'}); //全てのリンクを別タブにする場合
window.location.hash = '1';
});
</script>

<br><br>

<span style="margin-left:80px">勉強会資料</span>
![bg brightness:0.8 contrast:120%](https://www.nsk-japan.co.jp/administration_system/wp-content/uploads/2021/03/Microsoft-Power-BI.png)

---

<!-- class: slides -->

# 目次

- まず触ってみる
  [ダウンロード](SalesData.xlsx)
- 概要
  PowerBI 歴史,BI について,BI の機能,全体像,製品構成
- 実習
  モデリング実習,レポーティング実習

---

<!-- class: slides -->

# Power BI の歴史

[※Power BI 入門 位置 No.788](PBI.png)

- 2013 年 9 月
  Power BI for Office 365 (Excel のアドイン)　を発表　[(参考)](https://en.wikipedia.org/wiki/Microsoft_Power_BI#History)
- 2015 年 6 月 24 日
  Power BI 一般公開
- 2016 年 11 月
  Power Apps 正式リリース
- 2018 年
  Power Platform が現れる（Power BI,Power Apps,Flow）
- 2019 年 9 月　[(参考)](https://memo.tyoshida.me/power-platform/power-automate/microsoft-power-automate-rpa-public-preview/)
  Flow が Power Automate に変わる

---

# BI について

いうまでもないことですが、データ分析して改善していく企業活動は重要です。
多くの業種で、企業の競争力を高めるために BI ツールが必要です。

（製造業の例）
![](https://dts-bigdata.jp/dcms_media/image/QI_1.png)

<!-- 木島の担当するお客様で、半導体製造装置のメーカーがあるんですが、世界各地の現地法人に導入していて、海外なのでそれぞれ文化も違うので、現地の声のフィードバックだけでは製品改善が
難しかったのですが、PowerBIを利用して、世界各地に導入している半導体製造装置のダウンタイムの分析、現地法人からのQAの数量、種類の分析、製品導入・立ち上げ期間などをトラッキングして、
製品の改善やマニュアルの改善などにかなり活かしています。
最初は木島が作成したのですが、今は、ユーザーの情報システム部門でもなく、ユーザー部門でPower BIつくってます。 -->

---

# BI の機能

"BI"で Web 検索すると、こういったイメージでてきますが・・

<img style="margin-left:10px" src="https://data.wingarc.com/wp-content/uploads/2019/01/whatisbusinessintelligence.jpg" width=55%/>

Power BI はセルフサービス型 BI です[(参考)](https://www.slideshare.net/Tomoyuki_Oota/for-power-bi-beginners/19)

<!-- なので、例えば、保険会社の料率設定をするための分析、気候変動予測の計算とかには向いてないです -->

---

# Power BI の全体像

<br><br><br><br><br><br><br><br><br><br><br><br><br>

[全体像 (動画 2.5 分)](https://www.youtube.com/embed/ABKLmZHHu_I?start=891&end=1045)

![bg](pbi01.dio.svg)

---

<!-- class: slides -->

# 製品構成

![bg](pbi02.dio.svg)

<br><br><br><br><br><br><br><br><br><br><br><br><br>

[ライセンスの種類 (動画 3.6 分)](https://www.youtube.com/embed/ABKLmZHHu_I?start=1366&end=1586)　[ライセンスの種類 (リンク)](https://powerbi.microsoft.com/ja-jp/pricing/)

---

# PowerBI での作業内容

Power BI Desctop での作業イメージを理解する。
大きく２つに分かれていると考えると理解しやすい。

[Power BI の作業全体イメージ(リンク)](https://www.slideshare.net/yugoes1021/power-bi-122502202/14)
[Power BI デスクトップ画面（動画　 1.5 分）](https://www.youtube.com/embed/ABKLmZHHu_I?start=2364&end=2458)
[Power BI クエリエディタ（動画　 3.8 分）](https://www.youtube.com/embed/ABKLmZHHu_I?start=2524&end=2754)
[構成要素](https://docs.microsoft.com/ja-jp/learn/modules/introduction-power-bi/2-what-power-bi)
　データソース（Power BI の外）
　データセット（Power BI Desctop/Service）
　レポート（Power BI Desctop/Service）
　ダッシュボード（Power BI Service）

---

# データソースについて

コネクタやモードによる制約を理解する。特に DirectQuery は注意。

[コネクタ](https://www.slideshare.net/yugoes1021/power-bi-122502202/21)
[モードの違い（動画 8 分）](https://www.youtube.com/embed/FHhmI2onQ4s?start=1450&end=1928)

---

# モデリング実習

学習用データ [ダウンロード](covid19_datal.zip)

モデリングを理解する。モデリングを間違えると思ったとおりに動かない。

[データモデルの作り方](https://docs.microsoft.com/ja-jp/learn/modules/dax-power-bi-models/2-star-schema-design)
[クエリエディタとは](https://bi-seminar.jp/2018/05/23/what-is-query-editor/)
[Power Query でやること](https://docs.microsoft.com/ja-jp/learn/modules/clean-data-power-bi/)

---

# モデリング実習

以下内容の実習をします。

1. 列の削除, ヘッダーの昇格, ピボット解除, カスタム列追加
1. クエリの追加, クエリのマージ
1. カスタム列追加（M 言語）, ロケールによる変更
1. Web から取得

---

# レポーティング実習

Dax 式は、型があることを理解する
[DAX 式](https://qiita.com/pytomo/items/7e59da5a206203a2b17c)

メジャーと列の違いを理解する。
[メジャーとは](https://www.katalog.tokyo/?p=2885)
[メジャーと列](https://www.evernote.com/shard/s321/sh/54b02196-594e-4079-8a62-91b633192526/ca32e278c3acf8d9172627fa8d452571)

フィルターコンテキストを意識してレポートを作る。
[フィルタコンテキスト　参考サイト](https://qiita.com/PowerBIxyz/items/75c477dc27d0a3c3412e)

<!-- フィルターコンテキストがわかっているかどうかで、Power BIをわかっているかどうかが判断できると言っても良いと思います。 -->

---

# レポーティング実習

1. 表の作成、折れ線グラフの作成、マップの作成、スライサーの作成
1. メジャーの作成 SUM、メジャーの作成 MAX
1. フィルターコンテキストの理解
1. 店別売上比率の作成

---

<!--
class: eof
paginate: false
footer: © 2021 KLLC
-->

## Ｋ合同会社
