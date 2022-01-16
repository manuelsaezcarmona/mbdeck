/* eslint-disable no-underscore-dangle */
import './favoritelist.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavoriteItem } from '../favoriteitem/favoriteitem';
import { loadUser, delFavorite } from '../../redux/actioncreators';

export function FavoriteList() {
  const { recipes } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleDelete = (evt, id) => {
    evt.preventDefault();
    dispatch(delFavorite(id));

    // console.log(item._id);
  };
  console.log(recipes);
  const htmlRecipes = recipes.map((recipe) => (
    <li className="favorites-list__item">
      <FavoriteItem key={recipe._id} item={recipe} handleDelete={handleDelete} />
    </li>
  ));
  const template = (
    <div className="favorites">

      <ul className="favorites-list">
        {htmlRecipes}
      </ul>
    </div>

  );

  return template;
}
