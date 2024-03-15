

<template>
  <div id="app">
    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">FIT HUB</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <!-- Ajoutez d'autres liens de navigation si nécessaire -->
          </ul>
          <!-- Vous pouvez également ajouter des éléments ici comme un bouton de déconnexion -->
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <router-view></router-view>
  </div>
</template>

<script>
//import LoginComponent from './views/Login.vue';
import AuthService from './services/AuthService';
export default {
  name: 'App',
  components: {
    //LoginComponent,
  },
  methods: {
    async handleLogin(credentials) {
      try {
        // Appel de la méthode de connexion du service AuthService
        const user =await AuthService.login(credentials);
        console.log('User:', user);

        // Redirection vers la page d'accueil ou une autre page sécurisée
        this.$router.push('/');
      } catch (error) {
        // Gérer les erreurs de connexion
        console.error('Login failed:', error.message);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
