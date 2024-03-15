import axios from 'axios';

class UserService {
  async getUserProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  }

  async addUser(user) {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.post('http://localhost:3000/users/add', user, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  async updateUser(userId, userData) {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.put(`http://localhost:3000/users/update/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  // Autres requêtes utilisateur...
}

export default new UserService();
