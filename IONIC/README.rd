sudo npm install -g node-gyp@3.4.0
sudo npm install -g @ionic/app-scripts --save
npm -g install firebase --save
npm install -g typings
typings install --save firebase
typings install file:node_modules/firebase/firebase.d.ts --save --global && typings install


ionic build android
