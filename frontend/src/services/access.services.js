import axios from 'axios';

const baseURL = 'http://localhost:3030';

export async function login(user) {
  try {
    const response = await axios.post(`${baseURL}/login`, {
      username: user.username, pass: user.pass
    });
    // Dentro de la respuesta viene el token
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(
        {
          username: user.username,
          token: response.data
        }
      ));
    }

    return response.data;
  } catch (error) {
    throw new Error('No se ha podido realizar la request post ', error);
  }
}
export function logout() {
  localStorage.removeItem('user');
}

export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    const headContent = { Authorization: `Bearer ${user.token}` };

    return headContent;
  }
  return {};
}
