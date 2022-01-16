/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadRecipeID } from '../../redux/actioncreators';
import { getRecipeID } from '../../services/recipe.services';

import './recipecard.scss';

export function RecipeCard({ id }) {
  // const recipe = useSelector((store) => store.recipeID);
  const [recipe, setrecipe] = useState({});
  // const dispatch = useDispatch();

  useEffect(async () => {
    const recipeID = await getRecipeID(id);
    setrecipe(recipeID);
  }, []);

  const template = (

    <div className="recipe-card">
      <div className="recipe-card__imagecontainer">
        <img
          className="recipe-card__image"
          src={recipe.recipeImage || 'https://i.ibb.co/kHDY3n4/image-not-found.png'}
          alt={recipe.category}
        />
      </div>
      <div className="recipe-card__content">
        <h3 className="recipe-card__category">{recipe.category}</h3>
        <p className="recipe-card__name">{recipe.recipeName}</p>
      </div>
    </div>

  );
  return template;
}
