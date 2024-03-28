import { createApp } from 'vue'
import App from './App.vue'

//Importer Bootstrap Ici
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importer Material Design for Bootstrap: npm install mdb-ui-kit@3.2.0
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.min.js';

//Importer font awesome : npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.css';


import router from './router'; // Importez le routeur depuis le fichier router/index.js

//createApp(App).mount('#app')
createApp(App).use(router).mount('#app');
