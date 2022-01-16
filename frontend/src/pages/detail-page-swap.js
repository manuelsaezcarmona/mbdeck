/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/* import {
  AiFillCheckSquare, AiFillAppstore, AiFillCaretUp
} from 'react-icons/ai'; */
import { loadRecipeID } from '../redux/actioncreators';
// addFavorite
// import { HeaderDetailRecipe } from '../components/recipedetail/header-detail';
/* import { RecipePreparation } from '../components/recipedetail/preparation'; */

export function DetailPage() {
  const recipeIDstate = useSelector((state) => state.recipeID);

  const dispatch = useDispatch();

  const { recipeId } = useParams();

  /*  const handleAddFavorite = () => {
    dispatch(addFavorite(recipeIDstate._id));
  }; */
  console.log(`RecipeId por use params: ${recipeId}`);
  /*   useEffect(() => {
    dispatch(loadRecipeID(recipeId));
  }, [dispatch]);
  console.log(recipeIDstate); */
  /* const ingredientes = recipeIDstate.ingredients.map((ing) => (
    <li className="ingredients__item">
      <AiFillCheckSquare />
      {' '}
      {ing.quantity}
      -
      {ing.description}
    </li>
  ));
  console.log(ingredientes); */
  const template = (
    <>
      <p>Para pruebas</p>
      {/** <h1>Sera la cache?</h1>

      <header className="recipe-header">
        <div className="recipe-content">
          <img className="recipe-content__image" src={recipeIDstate.recipeImage} alt={recipeIDstate.recipeName} />
          <h2 className="recipe-content__title">{recipeIDstate.recipeName}</h2>

          <button className="recipe-content__buton" type="button" onClick={() => handleAddFavorite()}>Me gusta</button>
          <div className="details-recipe">
            <ul className="detail-recipe__list">
              <li>

                {recipeIDstate.difficulty}
              </li>
              <li>
                <AiFillAppstore />
                {recipeIDstate.ratingTotal}
              </li>
              <li>
                <AiFillCaretUp />
                {recipeIDstate.ratingVotes}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="ingredients-container">
        <h3 className="ingredients-title">ingredientes</h3>
        <ul className="ingredients__list">
          {ingredientes}
        </ul>

        <RecipePreparation receta={useSelector((state) => state.recipeID)} />

      </div> */}

    </>
  );

  return template;
}

/* <HeaderDetailRecipe titulo={useSelector((state) => state.recipeID)} /> */
