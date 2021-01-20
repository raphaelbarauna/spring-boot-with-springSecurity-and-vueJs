import axios from "axios";
/* Rota que vai ser utilizada */
const API_URL = "http://localhost:8081/api/auth/";

class AuthService {
 login(user) {
   return axios
    .post(API_URL + 'signin',{
      userName: user.userName,
      password: user.password
   })
   .then(response => {
    if(response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
   });
 }
 logout(){
   localStorage.removeItem('user');
 }
 register(user) {
  return axios.post(API_URL + 'signup', {
    userName: user.userName,
    email: user.email,
    password: user.password
  });
}
}

export default new AuthService();
