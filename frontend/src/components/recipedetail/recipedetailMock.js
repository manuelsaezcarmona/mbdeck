/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadRecipeID } from '../../redux/actioncreators';

export function MockRecipeDetail() {
  const recipe = useSelector((store) => store.recipeID);
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  console.log(recipeId);
  useEffect(() => {
    dispatch(loadRecipeID(recipeId));
  }, [dispatch]);

  const template = (
    <>
      <h2>Esto es el mock de la receta individual</h2>
      <p>{recipe.recipeName}</p>
      <p>{recipe.category}</p>
      <p>{recipe.difficulty}</p>

    </>
  );

  return template;
}
