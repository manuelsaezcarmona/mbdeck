/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadRecipeID, addFavorite } from '../../redux/actioncreators';

export function RecipeDetail() {
  const recipeIDstate = useSelector((state) => state.recipeID);
  const dispatch = useDispatch();
  const { recipeId } = useParams();

  const handleAddFavorite = () => {
    dispatch(addFavorite(recipeIDstate._id));
  };

  useEffect(() => {
    dispatch(loadRecipeID(recipeId));
  }, [dispatch]);

  const ingredientes = recipeIDstate.ingredients.map((ing) => (
    <li>
      {ing.quantity}
      {' '}
      -
      {' '}
      {ing.description}
      {' '}
    </li>
  ));
  const template = (
    <div className="recipedetail-container">
      <h2>
        {recipeIDstate.recipeName}
        {' '}
        DESDE RECIPE DETAIL
      </h2>

      <button type="button" onClick={() => handleAddFavorite()}>Me gusta</button>
      <h3>
        categoria:
        {recipeIDstate.category}
      </h3>
      <p>
        dificultad:
        {recipeIDstate.difficulty}
      </p>
      <p>
        Valoracion:
        {recipeIDstate.ratingTotal}
      </p>
      <p>
        Votos:
        {recipeIDstate.ratingVotes}
      </p>
      <img src={recipeIDstate.recipeImage} alt={recipeIDstate.recipeName} />
      <ul>
        {ingredientes}
      </ul>
    </div>
  );
  return template;
}
