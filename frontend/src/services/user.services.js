/* eslint-disable no-unused-vars */
import axios from 'axios';
import { authHeader } from './access.services';

const baseURL = 'http://localhost:3030';

export async function register(user) {
  try {
    const response = await axios.post(
      `${baseURL}/users/add`,
      {
        username: user.username, email: user.email, pass: user.pass, recipes: []
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('No se ha podido añadir el usuario', error);
  }
}
export async function getUser() {
  try {
    const response = await axios.get(
      `${baseURL}/users/id`,
      { headers: authHeader() }
    );
    return response.data;
  } catch (error) {
    throw new Error('No se ha podido recibir el usuario del servidor', error);
  }
}
export async function deleteUser() {
  try {
    const response = await axios.delete(`${baseURL}/users/delete`, { headers: authHeader() });
    return response.data;
  } catch (error) {
    throw new Error('No se ha podido borrar el usuario del servidor', error);
  }
}

export async function alterUser(data) {
  // Esta funcion no va a actualizar los arrays de las recetas del usuario
  // eso se realizara a traves de los metodos addRecipeUser y delRecipeUser
  // Por ahora no se puede actualizar al contraseña porque habria que volver a
  // encriptarla y tengo que modificar los metodos.
  try {
    const response = await axios.patch(
      `${baseURL}/users/update`,
      { username: data.username, email: data.email },
      { headers: authHeader() }
    );
    return response.data;
  } catch (error) {
    throw new Error('No se ha podido actualizar el usuario del servidor', error);
  }
}

export async function addRecipetoFavorites(id) {
  try {
    const response = await axios.patch(
      `${baseURL}/users/addrecipe/${id}`,
      { recipeid: id },
      { headers: authHeader() }
    );
    return response.data;
  } catch (error) {
    throw new Error('No se ha podido añadir la receta al usuario del servidor', error);
  }
}

export async function delRecipetoFavorites(id) {
  try {
    const response = await axios.patch(
      `${baseURL}/users/delrecipe/${id}`,
      { recipeid: id },
      { headers: authHeader() }
    );

    return response.data;
  } catch (error) {
    throw new Error('No se ha podido eliminar la receta al usuario del servidor', error);
  }
}
