import axios from 'axios';

const API_URL = 'https://www.mystockaibackend.azurewebsites.net/';

const register = (LastName, FirstName, age, emailid, password_) => {
  return axios.post(API_URL + 'register', {
    LastName,
    FirstName,
    age,
    emailid,
    password_,
  });
};

const login = (emailid, password_) => {
  return axios
    .post(API_URL + 'login', {
      emailid,
      password_,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
