/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line eol-last
// eslint-disable-next-line no-unused-vars
import actiontypes from './actiontypes';

// TODO register , addRecipetoUser, delrecipetouser.
const initialUser = {
  username: 'invitado',
  recipes: []
};

export function userReducer(user = initialUser, action) {
  let nextUser = user;
  switch (action.type) {
    case actiontypes.LOGIN_USER:
      nextUser = action.user;
      break;

    case actiontypes.LOGOUT_USER:
      nextUser = action.user;
      break;

    case actiontypes.REGISTER_USER:
      nextUser = action.user;
      break;
    case actiontypes.LOAD_USERID:
      nextUser = action.user;
      break;
    case actiontypes.DELETE_USER:
      nextUser = action.user;
      break;

    case actiontypes.UPDATE_USER:
      nextUser = action.user;
      break;

    case actiontypes.ADD_RECIPE:
      console.log(action);
      nextUser = {
        ...user,
        recipes: [...user.recipes, action.recipe]
      };
      break;
    case actiontypes.DELETE_RECIPE:
      console.log(action.recipe);
      nextUser = {
        ...user,
        recipes: user.recipes.filter((recipe) => recipe._id !== action.recipe._id)
      };
      // nextUser = action.user;
      break;
    case actiontypes.SET_USER:
      nextUser = action.user;
      break;
    default:
      break;
  }
  return nextUser;
}
