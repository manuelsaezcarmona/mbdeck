import actiontypes from './actiontypes';

const initialRecipes = [];

export function recipesReducer(recipes = initialRecipes, action) {
  let nextRecipes = recipes;
  switch (action.type) {
    case actiontypes.LOAD_RECIPES:
      nextRecipes = action.recipes;
      break;
    case actiontypes.FAILED_LOAD_RECIPES:
      // TODO manage error
      break;
    default:

      break;
  }
  return nextRecipes;
}
