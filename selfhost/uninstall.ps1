clear
echo "Press ENTER to confirm uninstallation."
echo "---------"
Remove-Item -Force -Recurse -Path "/Users/$Env:UserName/verifyme-website/"
echo "Uninstalling.."
clear
echo "Successfully uninstalled!"
