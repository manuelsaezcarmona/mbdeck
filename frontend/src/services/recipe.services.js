import axios from 'axios';
import { authHeader } from './access.services';

const baseURL = 'http://localhost:3030';

export async function getRecipes(query) {
  try {
    // const queryStr = JSON.stringify(query);
    const querykey = Object.keys(query)[0];
    const queryvalue = Object.values(query)[0];
    const queryURL = `${baseURL}/recipes/?${querykey}=${queryvalue}`;
    const result = await axios.get(`${queryURL}`);
    return result.data;
  } catch (error) {
    throw new Error('No se podido recuperar las recetas ', error);
  }
}

export async function getRecipeID(id) {
  try {
    const result = await axios.get(`${baseURL}/recipes/${id}`, { headers: authHeader() });
    return result.data;
  } catch (error) {
    throw new Error('No se podido recuperar una receta ', error);
  }
}
