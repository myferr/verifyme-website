clear
echo "Press ENTER to confirm uninstallation."
echo "---------"
Remove-Item /Users/$Env:UserName/verifyme-website/
echo "Uninstalling.."
clear
$Folder = 'C:/$Env:UserName/verifyme-website'

if (Test-Path -Path $Folder) {
    "Uninstallation failed, please run the command again."
} else {
    "Successfully uninstalled!"
}
