# VHDの移動

login-AzAccount

Select-AzSubscription -SubscriptionId  "4eff658a-d6c6-48b2-a7f3-dd0f09c49985"

$sourcergname = "VisualStudio"
$srcdisk = "VS_OsDisk_1_da2b3b7b2b194f53828f4028575c82e7"
$mdiskURL = Grant-AzDiskAccess -ResourceGroupName $sourcergname -DiskName $srcdisk -Access Read -DurationInSecond 33600

Login-AzAccount

$targetrgname = "vm"
$storageacccountname = "vsvmstorage"
$countainername = "con"

$storageacccountkey = Get-AzStorageAccountKey -ResourceGroupName $targetrgname -Name $storageacccountname
$storagectx = New-AzStorageContext -StorageAccountName $storageacccountname -StorageAccountKey $storageacccountkey[0].Value
$targetcontainer = Get-AzStorageContainer -Name $countainername -Context $storagectx
$destdiskname = "vmdisk"
$sourceSASurl = $mdiskURL.AccessSAS
$ops = Start-AzStorageBlobCopy -AbsoluteUri $sourceSASurl -DestBlob $destdiskname -DestContainer $targetcontainer.Name -DestContext $storagectx
Get-AzStorageBlobCopyState -Container $targetcontainer.Name -Blob $destdiskname -Context $storagectx -WaitForComplete


# VHD→ManagedDisk PowerShell

#Select Subscription
$SubscriptionId =“b769a42f-2b90-412d-ae52-71b55986c1d8"
Select-AzSubscription -SubscriptionId $SubscriptionId

#Parameter
$ResourceGroupName = "vm"
$location = "West US 2"
$DiskName = "disk"
$vhdUri = "https://vsvmstorage.blob.core.windows.net/con/vmdisk"
$AccountType ="Standard_LRS"
$OsType = "Windows"
$SAid = "/subscriptions/b769a42f-2b90-412d-ae52-71b55986c1d8/resourceGroups/vm/providers/Microsoft.Storage/storageAccounts/vsvmstorage"

#Disk Config
$DiskConfig = New-AzDiskConfig -AccountType $AccountType -Location $Location -CreateOption Import -SourceUri $vhdUri -OsType $OsType -StorageAccountId $SAid

#VHD → Managed Disk
New-AzDisk -DiskName $DiskName -Disk $DiskConfig -ResourceGroupName $ResourceGroupName

