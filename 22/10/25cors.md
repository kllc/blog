# CORS 設定を Azure CLI でやることがあるそうです

IOS の開発を、Capacitor で開発するとき、

- アプリはローカルで開発
- API は Azure Function

とすることがあるが、Capacitor での開発時は URL が 　 capacitor://localhost 　になっちゃう。

https://medium.com/enappd/how-to-make-api-calls-in-ionic-capacitor-apps-a9c22d205a1d

Azure Function の CORS 設定は、

http と　 https しか受付けないので詰む。

そんなとき、Azure CLI を使うそうです。

これかな。

https://learn.microsoft.com/en-us/cli/azure/functionapp/cors?view=azure-cli-latest
