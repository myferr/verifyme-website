clear
print "Downloading.."
cd ~
git.exe clone https://github.com/myferr/verifyme-website/
clear
print "Download complete..."

cd ~/verifyme-website/src
npm install
clear
npm run dev -- --open
