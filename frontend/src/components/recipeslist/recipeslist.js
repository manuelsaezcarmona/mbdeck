/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, generatePath, useParams } from 'react-router-dom';
// import { RecipeCard } from '../recipecard/recipecard';
import { loadRecipes } from '../../redux/actioncreators';
import './recipelist.scss';
import { RecipeCard } from '../recipecard/recipecard';

export function RecipesList() {
  const recipes = useSelector((store) => store.recipes);
  const dispatch = useDispatch();

  // Probar que recipe List filtre por params en vez de por props
  const { category } = useParams();

  useEffect(() => {
    dispatch(loadRecipes({
      category
    }));
  }, [dispatch, category]);

  const htmlRecipes = recipes.map((recipe) => (
    <Link
      id={recipe._id}
      to={generatePath(
        '/category/:category/:recipeId',
        {
          category, recipeId: recipe._id
        }
      )}
    >
      <li className="recipelist__item" key={`lic-${recipe._id}`}>
        <RecipeCard key={`ID-${recipe._id}`} item={recipe} id={recipe._id} />
      </li>
    </Link>
  ));

  const template = (
    <div className="recipes-container">
      <ul className="recipelist">
        {htmlRecipes}
      </ul>
    </div>
  );
  return template;
}
