# 概要

仮想マシンを別のテナントに移したくて、面倒だなと思ってずっとやってなかったのですが、頑張って power shell でやってみました。
案の定ハマりましたが、ハマったポイントは、１個だけ。

基本は以下 URL の説明の通りで問題なかったです。

[Azure Virtual Machine を別テナントの Azure 環境に移してみた](https://www.tama-negi.com/2020/01/12/disk_vhd/)

ただ、最後の Managed Disk への変換でエラー。

```
New-AzDisk: Required parameter 'storageAccountId' is missing (null).
```

New-AzDisk が storageAccountId 　を指定しろとのこと。

# 解決方法

以下の URL で解決。
たどり着くのに時間かかった。

[getting-error-quotcreating-a-managed-disk-from-the-upload-vhdquot](https://social.msdn.microsoft.com/Forums/SqlServer/en-US/e562a8c3-ccf0-4c39-ac06-82ba49df94b7/getting-error-quotcreating-a-managed-disk-from-the-upload-vhdquot?forum=WAVirtualMachinesforWindows)

New-AzDisk のコマンドにパラメータを入れても動かなかったけど・・

-Disk $DiskConfig 　のところに入れたら動きました。

```
# VHDの移動

login-AzAccount

Select-AzSubscription -SubscriptionId  "12345678-1234-1234-1234-123456789012"

$sourcergname = "XXXX"
$srcdisk = "VS_OsDisk_1_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
$mdiskURL = Grant-AzDiskAccess -ResourceGroupName $sourcergname -DiskName $srcdisk -Access Read -DurationInSecond 33600

Login-AzAccount

Select-AzSubscription -SubscriptionId  "12345678-1234-1234-1234-123456789012"

$targetrgname = "XXXX"
$storageacccountname = "XXXX"
$countainername = "XXXX"

$storageacccountkey = Get-AzStorageAccountKey -ResourceGroupName $targetrgname -Name $storageacccountname
$storagectx = New-AzStorageContext -StorageAccountName $storageacccountname -StorageAccountKey $storageacccountkey[0].Value
$targetcontainer = Get-AzStorageContainer -Name $countainername -Context $storagectx
$destdiskname = "XXXX"
$sourceSASurl = $mdiskURL.AccessSAS
$ops = Start-AzStorageBlobCopy -AbsoluteUri $sourceSASurl -DestBlob $destdiskname -DestContainer $targetcontainer.Name -DestContext $storagectx
Get-AzStorageBlobCopyState -Container $targetcontainer.Name -Blob $destdiskname -Context $storagectx -WaitForComplete


# VHD→ManagedDisk PowerShell

#Select Subscription
$SubscriptionId ="12345678-1234-1234-1234-123456789012"
Select-AzSubscription -SubscriptionId $SubscriptionId

#Parameter
$ResourceGroupName = "XXXX"
$location = "West US 2"
$DiskName = "XXXX"
$vhdUri = "https://XXXX.blob.core.windows.net/XXXX/XXXX"
$AccountType ="Standard_LRS"
$OsType = "Windows"
$SAID = "/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/XXXX/providers/Microsoft.Storage/storageAccounts/XXXX"

#Disk Config
$DiskConfig = New-AzDiskConfig -AccountType $AccountType -Location $Location -CreateOption Import -SourceUri $vhdUri -OsType $OsType -StorageAccountId $SAID

#VHD → Managed Disk
New-AzDisk -DiskName $DiskName -Disk $DiskConfig -ResourceGroupName $ResourceGroupName
```
