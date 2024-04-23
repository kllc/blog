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
      background:#000;
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

<!--　class: top -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
$('a').attr({'target':'_blank'}); //全てのリンクを別タブにする場合
window.location.hash = '1';
});
</script>

![bg 95% brightness:1.0 contrast:100%](https://biqql.com/wp-content/uploads/2024/02/Power-Platform.svg)


    
<svg xmlns='http://www.w3.org/2000/svg' width='1280px' height='720px' viewBox="0, 0, 1280, 720" preserveAspectRatio='none'><circle cx="310" cy="240" r="120" stroke="red" stroke-width="8" fill="none" offset /></svg>


---

<!-- class: slides -->

# Power Platform とは

Power Platform は、
Microsoft社が提供するローコード開発プラットフォーム。
PowerPlatfromを契約すると、プラットフォームにログインして様々なローコードサービスが使えるようになります。

→　こうだとわかり易いのですが・・

<!-- 本日は、Power Automate の開発事例を説明させていただくのですが、一旦、PowerPlatfrom 全体を説明させてください。 -->

---
# Power Platform とは

  ✕ Power Platfrom 管理センターで管理されている ( ✕ Power BI )
  ✕ Connector を使う ( ✕ Power Pages )
  ✕ Dataverse を使う ( ✕ Power BI , Power Automate 必ずしも使う必要はない )
  ✕ Power の文字がつく ( ✕ Copilot Studio )
  △ クラウドサービス ( △ Power BI Desktop, △ Power Automate Desktop)
  ◯ ローコードソリューション

　→ Microsoft が提供するクラウドベースのローコード開発サービスの仲間たち
　と考えるとしっくりきます。

---
# 構成要素で打順を組んでみました

Power Automate は、Power Platform の中心選手です。

1番CF　Power BI
2番2B　Data Connectors
3番SS　`Power Automate`
4番3B　Power Apps
5番LF　Copilot Studio
6番1B　Power Pages
7番C 　Dataverse
8番RF　AI Builder
9番P 　Power FX

---
# Power Automate で何ができるか

Power Automate ・・・ クラウドサービスの自動化
Power Automate Desktop ・・・ ＰＣの自動化

---
# Power Automate クラウドサービスの自動化

K合同会社で実装している事例を紹介します。

## `TimeRex で予約されたら Lineに通知して、リードに登録`

---
# 実装の説明

body 内の文字
```
ゲスト会社名 : Alive合同会社<br>
ゲスト氏名 : 木島 基文<br>
ゲストメールアドレス : kijima@kllc.jp<br>
```

ゲスト会社名の取得のための関数
```
first(split(last(split(triggerOutputs()?['body/body'],'ゲスト会社名 : ')),'<br>'))
```
関数の説明
「`ゲスト会社名：`」の文字で、分割して後半を取得
「`<br>`」の文字で分割して、前半を取得

---
# Power Automate Desktop ＰＣの自動化

アーカス・ジャパンで実装している事例を紹介します。

## `Airレジに登録されたデータを Dataverse にインポート`

---
# Power Automate で何ができるか

Power Automate ・・・ クラウドサービスの自動化
Power Automate Desktop ・・・ ＰＣの自動化
　→　なんでもできます。Microsoft関係なくても問題ないです。

---

<!--
class: eof
paginate: false
footer: © 2024 KLLC
-->

## Ｋ合同会社

