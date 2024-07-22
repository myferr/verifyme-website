clear
echo "Downloading.."
cd ~
git.exe clone https://github.com/myferr/verifyme-website/
clear
echo "Download complete..."

cd verifyme-website/src
sleep 1
npm install
clear
npm run dev -- --open
