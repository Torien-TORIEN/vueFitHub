import axios from 'axios';
const apiUrl = process.env.API_URL; // Importez la variable API_URL de votre fichier .env
const token = localStorage.getItem('token');

class UserService {
  async getUserById(id ) {
    if (!token) {
      throw new Error('No token found');
    }
    try{
      const response = await axios.get(`${apiUrl}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.data;//user
    }catch(error){
      if(error.response && error.response.data.error){
        throw new Error(error.response.data.error);
      }else{
        throw new Error(error.message)
      }
    }
  }

  async addUser(user) {
    try{
      if (!token) {
        //throw new Error('No token found');
      }
  
      const response = await axios.post(`${apiUrl}/users`, user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
  
      return response.data;
    }catch(error){
      if(error.response && error.response.data.error)
        throw new Error(error.response.data.error)
      else
        throw new Error(error.message)
    }
  }

  async updateUser(userId, userData) {
    try{
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.put(`${apiUrl}/users/update/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      //retourner user 
      return response.data;

    }catch(error){
      if(error.response && error.response.data.error)
        throw new Error(error.response.data.error)
      else
        throw new Error(error.message)
    }



  }

  async addActivyToUser(activityId, userId){
    try{
      if (!token) {
        //throw new Error('No token found');
      }
  
      const response = await axios.put(`${apiUrl}/users/addactivity`, {activityId,userId},{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
  
      return response.data;
    }catch(error){
      if(error.response && error.response.data.error)
        throw new Error(error.response.data.error)
      else
        throw new Error(error.message)
    }
  }

  async removeActivyFromUser(activityId, userId){
    try{
      if (!token) {
        //throw new Error('No token found');
      }
  
      const response = await axios.put(`${apiUrl}/users/removeactivity`, {activityId,userId},{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
  
      return response.data;
    }catch(error){
      if(error.response && error.response.data.error)
        throw new Error(error.response.data.error)
      else
        throw new Error(error.message)
    }
  }

  async getActivitiesByUser(userId){
    if (!token) {
      throw new Error('You are not connected !');
    }
    try{
      const response = await axios.get(`${apiUrl}/users/activities/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.data;//activities
    }catch(error){
      if(error.response && error.response.data.error){
        throw new Error(error.response.data.error);
      }else{
        throw new Error(error.message)
      }
    }
  }

  // Autres requêtes utilisateur...
}

export default new UserService();
