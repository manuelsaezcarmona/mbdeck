/* eslint-disable no-underscore-dangle */
import './favoriteitem.scss';
import { Link } from 'react-router-dom';
import { GoCircleSlash } from 'react-icons/go';

export function FavoriteItem({ item, handleDelete }) {
  const template = (
    <>
      <Link to="/">
        <div className="favoritelist-item_image">
          <img
            className="recipe-card__image"
            src={item.recipeImage || 'https://i.ibb.co/kHDY3n4/image-not-found.png'}
            alt={item.recipeName}
          />
        </div>
      </Link>

      <div className="favoritelist-item__content">
        <h4 className="favoritelist-item__category">{item.category}</h4>
        <p className="favoritelist-item__title">{item.recipeName}</p>
      </div>
      <GoCircleSlash onClick={(evt) => handleDelete(evt, item._id)} />
    </>
  );

  return template;
}
