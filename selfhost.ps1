clear
echo "Downloading.."
cd /Users/$Env:UserName
git.exe clone https://github.com/myferr/verifyme-website/
clear
echo "Download complete..."

cd /Users/$Env:UserName/verifyme-website/src
npm install
clear
npm run dev -- --open
