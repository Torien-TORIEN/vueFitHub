import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'; // Importez le routeur depuis le fichier router/index.js

//createApp(App).mount('#app')



createApp(App).use(router).mount('#app');
