import {
  combineReducers, applyMiddleware, compose, createStore
} from 'redux';
import thunk from 'redux-thunk';
import { recipesReducer } from './recipe.reducer';
import { recipeIDreducer } from './recipeid.reducer';
import { userReducer } from './user.reducer';

export default function configureStore(preLoadState) {
  const rootReducer = combineReducers({
    recipes: recipesReducer,
    recipeID: recipeIDreducer,
    user: userReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preLoadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
