/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadRecipes } from '../redux/actioncreators';

export function RecipeDetailPage() {
  const recipeState = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRecipes({}));
  }, [dispatch]);

  const htmlitems = recipeState.map((receta) => (
    <li>
      <Link to={`recipe/${receta._id}`}>
        {receta.recipeName}
      </Link>
    </li>
  ));

  const template = (

    <>
      <h2>Esta es la Pagina de detalle</h2>
      <p>Se mostrara la pagina de detalle del producto</p>
      <p>Este componente tendra un renderizado condicional</p>
      <p>Si estas registrado aparecera la receta</p>
      <p>Si no, solo aparecera un mensaje de que te registres</p>
      <p>LISTA DE RECETAS SIN FILTRAS NI POLLAS</p>
      <ul>
        {htmlitems}
      </ul>

    </>
  );
  return template;
}
