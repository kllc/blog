# Web.config

Azure App Service を Windows で作成したとき、修正したほうがいい Web.config の設定。
ファイルアップロードなどの機能があるとき、エラーになるのを回避する設定です。
[参考](http://once-and-only.com/%E6%9C%AA%E5%88%86%E9%A1%9E/asp-net%E3%81%A7413-request-entity-too-large-c/)

以下の追加

```xml
<configuration>
   <system.webServer>
      <security>
          <requestFiltering>
              <requestLimits maxAllowedContentLength="209715200" />
          </requestFiltering>
      </security>
   </system.webServer>
</configuration>
```
