---
marp: true
theme: default
style: |
  section {
      background-color: white;
      font-family: 'Noto Sans JP Light','Yu Gothic UI';
      color: #236;
  }
  section.top {
      font-weight:bold;
  }
  section.top code {
      color: #fff;
      display:block;
      background: rgba(45,45,45, 0.8);
      padding: 0.4em;
      font-size:2.5em;
      text-align:center;
  }
  section.title {
      color: #fff;
      background-color: RGB(26, 13, 171);
      padding-left :40px;
      font-family: 'Noto Sans JP Regular','Yu Gothic UI';
  }
  section.title a {
      color: #fff;
  }
  section.slides {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='680px' height='230px' preserveAspectRatio='none'><path d='M130,0l-70,110l70,110l50,0l-70,-110l70,-110H0Z' transform='translate(0 5)' fill='RGB(204,204,204)'/><path d='M0,0l0,220l50,0l0,-47.14285714l-40,-62.85714286l40,-62.85714286l0,-47.14285714H0Z' transform='translate(0 5)' fill='RGB(0,0,0)'/><path d='M50,0l0,47.14285714l30,-47.14285714H0Z' transform='translate(0 5)' fill='RGB(204,204,204)'/><path d='M50,220l0,-47.14285714l30,47.14285714H0Z' transform='translate(0 5)' fill='RGB(204,204,204)'/><text id='LLC' transform='translate(180 226)' font-size='316' font-family='SegoeUI-Bold, Segoe UI' font-weight='700'>LLC</text></svg>");
      background-repeat: no-repeat;
      background-position: top 10px right 10px;
      background-size: 220px;
  }    
  section.image {
      background-image: none;
      background-position: top 500px;
  }    
  h1 {
      position : absolute;
      top: 40px;
      left: 20px;
      line-height:0px;
  }
  section.slides code {
      background-color: #FF6;
      font-family: 'Noto Sans JP Light','Yu Gothic UI';
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
  h6 {
      text-align: right;
      line-height:0px;
  }
---

<!--
オンライン勉強会注意事項リスト

- （最重要）端末再起動
- （最重要）息を吸うときに音を出さない
- （最重要）リモートデスクトップは、rdp ファイルじゃなくて、windows から起動する
- （最重要）音声をリモートで再生で設定する　設定済みなのでそのままで大丈夫
- 場所を移動してから準備する
- セカンドディスプレイの解像度が変わると、OBS の設定が変わるため、全部の環境に接続してから OBS 設定変更する
- セカンドディスるプレイのマウスの方向を確認する
- Zoom url を送る
- Zoom 全画面になっているかを確認する
- Youtubeの音声、画質を確認
- Wifiの速度が出ていることを確認
- 2560 1440 を使う

- デスクトップをきれいにする
- ブラウザはゲストモード　事故防止　必要な画面はいろいろログインしておく
- 通知系アプリを落とす
- 使わないアプリは終了
- 予測変換や履歴をできる限り無効化
- 要リハーサル

- 音が聞こえない時、配信PCは、CableAudioが有効であること
　OBSのデスクトップ設定（https://vip-jikkyo.net/obs-not-capturing-pc-game-audio）
　サウンドデバイスの設定

- voice meeter は、
  HARDWARE INPUT １ を WDM:マイク配列
  HARDWARE INPUT ２ を MME:エコーキャンセルスピーカー
  HARDWARE OUT を ３ WDM:エコーキャンセルスピーカー
  Run other Voice meeter tools > Run 15 Bands EQ > BUS B を選択

  System Setting
  MME 2048
  WDM 512
-->

<!--　class: top -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
$('a').attr({'target':'_blank'}); //全てのリンクを別タブにする場合
window.location.hash = '1';
});
</script>

<span style="font-size:2.0em;margin-left:10px;color:#333">Chat GPT </span>
![bg brightness:0.8 contrast:120%](https://powerpages.microsoft.com/pictures/pages/homePage/hero/Hero.jpg)

---

<!-- class: image -->

# 目次

この勉強会は、Power Platform に関連するテーマに関して、ディスカッション、雑談する勉強会です。<br>

質問はいつでも、さえぎって入ってきて頂いて問題ないです。チャットでもいいです。
お名前は名乗っても名乗らなくても、どちらでも問題ないです。

<br />

今回のテーマは以下です。<br>

・Power Platform とインフラ・非機能要件
・OpenAI・Chat GPT

---

<!-- class: slides -->

# 勉強会の動画

👉 [Youtube](https://youtube.com/live/E7CZwGmdyi4?feature=share)

---

# Chat GPT ネット記事、Tweet など

[ネット検索を根本から変える｢ChatGPT｣](https://news.line.me/detail/oa-president/g49pco6vverc?mediadetail=1&utm_source=line&utm_medium=share&utm_campaign=none)

[Google が創業者に助けを求める](https://japan.cnet.com/article/35198930/)

[マイクロソフト、「ChatGPT」の OpenAI に約 1.3 兆円の出資を検討か](https://japan.zdnet.com/article/35198416/)

[AI が急激に賢くなった](https://twitter.com/takuyakitagawa/status/1619513559326818305?s=46&t=3Btg6f7f6J8KWLQz8uZcTw)

[ChatGPT まとめ](https://twitter.com/shodaiiiiii/status/1618073678553681921)

---

# Chat GPT とは

(以下、Chat GPT による生成)  
Chat GPT は、OpenAI が開発した大型の自然言語処理のモデルです。
Chat GPT は、GPT-3 の後継モデルとして、2020 年にリリースされました。
質問応答、文章生成、機械翻訳など、様々なタスクに使用することができます。

(特徴)  
1.自然言語処理に強い  
2.訓練データに基づく学習能力が高い。  
3.大量のテキストデータからの語彙学習能力がある。  
4.自動文章生成能力がある。  
5.質問応答や対話システムなど様々なタスクに対応可能。  
6.API として提供され、開発者や研究者が利用可能。

---

# OPEN AI とは

(以下、Chat GPT による生成、間違いあり)  
OPENAI は、2015 年にイルカ・シュルツ、イライジャ・ヒューム、サム・アルトマンらによって設立されました。
人工知能を普及させ、人間にとって良い影響を与えることを目的とした、非営利組織です。
人工知能のリサーチを行っており、様々なタスクにおいて高性能なモデルを開発しています。それらのモデルは、API として提供され、開発者や研究者が利用することができます。

---

# Chat GPT でノーコードツールが変わるか

(以下、Chat GPT による生成)  
 Chat GPT を利用することで、自然言語処理に関するタスクを実現するためのノーコードツールが変わる可能性があります。

Chat GPT のような高性能な自然言語処理モデルを利用することで、以前はプログラミングスキルが必要だったタスクを、ノーコードで実現することができるようになります。

例えば、自動文章生成、質問応答、対話システムなどが、API を利用して簡単に開発することができるようになります。

しかしながら、Chat GPT を使用するためには、訓練データの準備や API の呼び出しなど、技術的な知識が必要になることがあります。

---

<!--
class: eof
paginate: false
footer: © 2022 KLLC
-->

## アーカス・ジャパン株式会社／Ｋ合同会社
