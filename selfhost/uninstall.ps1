clear
echo "Press ENTER to confirm uninstallation."
echo "---------"
Remove-Item -Force -Recurse -Confirm -Path="/Users/$Env:UserName/verifyme-website/"
echo "Uninstalling.."
clear
echo "Successfully uninstalled!"
