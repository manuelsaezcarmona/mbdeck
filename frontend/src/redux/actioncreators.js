import actiontypes from './actiontypes';
import * as recipeService from '../services/recipe.services';
import * as accessService from '../services/access.services';
import * as userService from '../services/user.services';

export function loadRecipes(query) {
  return async (dispatch) => {
    try {
      const recipes = await recipeService.getRecipes(query);
      dispatch({ type: actiontypes.LOAD_RECIPES, recipes });
    } catch (error) {
      dispatch({ type: actiontypes.FAILED_LOAD_RECIPES, error });
    }
  };
}
export function loadRecipeID(id) {
  return async (dispatch) => {
    try {
      const recipe = await recipeService.getRecipeID(id);
      console.log(recipe);
      dispatch({ type: actiontypes.LOAD_RECIPEID, recipe });
    } catch (error) {
      dispatch({ type: actiontypes.FAILED_LOAD_RECIPEID, error });
    }
  };
}

export function logUser(userdata) {
  return async (dispatch) => {
    try {
      await accessService.login(userdata);
      const user = await userService.getUser();
      dispatch({ type: actiontypes.LOGIN_USER, user });
    } catch (error) {
      dispatch({ type: actiontypes.ERROR_GENERAL, error });
    }
  };
}

export function logOutUser() {
  accessService.logout();
  return (dispatch) => {
    accessService.logout();
    dispatch({
      type: actiontypes.LOGOUT_USER,
      user: { username: 'invitado' }
    });
  };
}

export function userRegister(userdata) {
  return async (dispatch) => {
    try {
      const user = await userService.register(userdata);
      // Todo leer el token , podemos guardarlo en el estado user.
      // mensaje de registrado y redirigir a la pagina de usuario
      const datatoken = await accessService.login(userdata);
      user.token = datatoken;
      dispatch({ type: actiontypes.REGISTER_USER, user });
    } catch (error) {
      dispatch({ type: actiontypes.ERROR_GENERAL, error });
    }
  };
}

export function loadUser() {
  return async (dispatch) => {
    try {
      const user = await userService.getUser();
      dispatch({ type: actiontypes.LOAD_USERID, user });
    } catch (error) {
      dispatch({ type: actiontypes.ERROR_GENERAL, error });
    }
  };
}

export function setUser(user) {
  return {
    type: actiontypes.SET_USER, user
  };
}

export function userDelete() {
  return async (dispatch) => {
    try {
      await userService.deleteUser();
      accessService.logout();
      dispatch({ type: actiontypes.DELETE_USER, user: {} });
    } catch (error) {
      dispatch({ type: actiontypes.ERROR_GENERAL, error });
    }
  };
}

export function userUpdate(data) {
  return async (dispatch) => {
    try {
      const user = await userService.alterUser(data);
      dispatch({ type: actiontypes.UPDATE_USER, user });
    } catch (error) {
      dispatch({ type: actiontypes.ERROR_GENERAL, error });
    }
  };
}

export function addFavorite(id) {
  return async (dispatch) => {
    try {
      const recipe = await recipeService.getRecipeID(id);
      await userService.addRecipetoFavorites(id);
      dispatch({ type: actiontypes.ADD_RECIPE, recipe });
    } catch (error) {
      dispatch({ type: actiontypes.ERROR_GENERAL, error });
    }
  };
}

export function delFavorite(id) {
  return async (dispatch) => {
    try {
      const recipe = await recipeService.getRecipeID(id);
      await userService.delRecipetoFavorites(id);

      dispatch({ type: actiontypes.DELETE_RECIPE, recipe });
    } catch (error) {
      dispatch({ type: actiontypes.ERROR_GENERAL, error });
    }
  };
}
