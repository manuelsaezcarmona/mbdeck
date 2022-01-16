import actiontypes from './actiontypes';

const initialState = {
  ingredients: [],
  preparation: []
};

export function recipeIDreducer(recipeID = initialState, action) {
  let nextRecipeID = { ...recipeID };
  switch (action.type) {
    case actiontypes.LOAD_RECIPEID:
      // eslint-disable-next-line no-case-declarations

      nextRecipeID = JSON.parse(JSON.stringify(action.recipe));
      break;

    default:
      break;
  }

  return nextRecipeID;
}
