# Power Pages の価格

2022/10 月に Power Apps Portal から Power Pages という製品に変わり、課金方法も新しくなったけど、何点か疑問点があったので整理しました。

Title : Power Pages の価格
URL : https://powerpages.microsoft.com/ja-jp/pricing/

# 従量課金の場合の課金カウント方法

## 認証済みユーザーに対する Power Pages プランの場合

サイトにログインした段階でカウントが発生。
なお、このうち Dynamics 365 サブスクリプションや Power Apps per User プランを所有しているユーザーは対象外となる。
<参考>
Title : 認証済みユーザー メーター
URL : https://learn.microsoft.com/ja-jp/power-platform/admin/pay-as-you-go-meters?tabs=image#authenticated-user-meter

### 対象外となるユーザーはどうやって判定するのか

Azure Active Directory で認証したユーザーが、プランを所有している場合に対象外となる。
Azure Active Directory B2C など他の認証方法で認証した場合は、課金されるので注意。

## 匿名ユーザーに対する Power Pages プランの場合

Web サイトページを閲覧した段階でカウントが発生。
なお、匿名ユーザーはブラウザの Cookie に保存されたユーザー ID 情報により判別されるため、
該当のユーザーがログイン操作を行った場合などは、匿名ユーザーではなく、認証済みユーザーとしてカウントされる。
<参考>
Title : 匿名ユーザー メーター
URL : https://learn.microsoft.com/ja-jp/power-platform/admin/pay-as-you-go-meters?tabs=image#anonymous-user-meter

# 課金の管理について

## 課金の上限設定はできるか

以下公開情報に記載の Azure Cost Management 側で設定可否を確認する必要がある。
予算金額に応じたアラート設定は可能だけど、上限設定はできない。
<参考>
Title : コストを管理する方法
URL : https://learn.microsoft.com/ja-jp/power-platform/admin/pay-as-you-go-usage-costs#how-to-manage-costs

## 課金の状況を見る画面

Azure ポータルの Azure Cost Management 上でご確認可能。
<参考>
Title : Azure ポータルで請求情報を表示する
URL : https://learn.microsoft.com/ja-jp/power-platform/admin/pay-as-you-go-usage-costs#view-billing-information-in-the-azure-portal

## サイトの一時停止（課金の停止）の方法

従量課金を停止する場合、以下公開情報に記載の請求ポリシーの解除、またはポリシーの削除にて対処可能。
<参考>
Title : 従量課金制を無効にする
URL : https://learn.microsoft.com/ja-jp/power-platform/admin/pay-as-you-go-set-up#turning-off-pay-as-you-go

## 「運用に変換」のボタンを押した直後の状態

「運用に変換」のボタンを押した直後の状態のときは、「サブスクリプションプラン」にも「従量課金」のどちらにもなっていない。
恐らく無敵。
だけど、いずれ使えなくなると思われる。
