import axios from 'axios';

const API_URL = 'localhost:8081/tickets/Utilisateur';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'logout', {
      username: user.username,
      email: user.email,
      password: user.password
    });
}
}

export default new AuthService();