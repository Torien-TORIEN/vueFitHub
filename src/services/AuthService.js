// services/AuthService.js

// Importer Axios
import axios from 'axios';

class AuthService {
  async login(credentials) {
    // Effectuer la requête de connexion et récupérer la réponse
    const response = await axios.post('http://localhost:3000/users/login', credentials);
    // Stocker le jeton d'authentification dans le localStorage ou dans un autre endroit sûr
    localStorage.setItem('token', response.data.token);
    // Retourner les données utilisateur ou une indication de succès
    return response.data.user;
  }

  async logout() {
    // Supprimer le jeton d'authentification du localStorage ou de l'endroit où il est stocké
    localStorage.removeItem('token');
    // Effectuer d'autres opérations de déconnexion si nécessaire
  }

  isAuthenticated() {
    // Vérifier si l'utilisateur est authentifié en vérifiant la présence du jeton dans le localStorage ou dans l'endroit où il est stocké
    return localStorage.getItem('token') !== null;
  }
}

export default new AuthService();

  