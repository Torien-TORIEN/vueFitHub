<template>
    <div class="container mt-5">
      <h2>Bienvenue sur notre application</h2>
      <p>Ceci est la page d'accueil.</p>
      <p>Vous pouvez ajouter du contenu ici pour accueillir l'utilisateur.</p>
      <button @click="handleLogout" class="btn btn-danger">Déconnexion</button>
    </div>
  </template>
  
  <script>
  import AuthService from '../services/AuthService';
  
  export default {
    name:"HomeComponent",
    methods: {
      handleLogout() {
        // Appel de la méthode de déconnexion du service AuthService
        AuthService.logout();
        // Redirection vers la page de connexion
        this.$router.push('/login');
      }
    }
  };
  </script>
  