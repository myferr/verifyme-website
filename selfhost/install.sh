clear
echo "Downloading.."
cd ~
git clone https://github.com/myferr/verifyme-website/
clear
echo "Download complete..."

cd verifyme-website/src
npm install
clear
npm run dev -- --open
