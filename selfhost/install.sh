clear
cd ~
echo "Downloading.."
git.exe clone https://github.com/myferr/verifyme-website/
clear
echo "Download complete..."

cd ~/verifyme-website/src
npm install
clear
npm run dev 