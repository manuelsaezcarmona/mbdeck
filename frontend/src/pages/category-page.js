import { useParams, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RecipesList } from '../components/recipeslist/recipeslist';
import { RestrictedPage } from './restricted-page';

export function CategoryPage() {
  const { category } = useParams();

  let template = '';
  const user = useSelector((store) => store.user);

  if (user.username === 'invitado' || '') {
    template = (
      <RestrictedPage />
    );
  } else {
    template = (
      <>
        <h2>{category}</h2>
        <RecipesList categoria={category} />
        <Outlet />
      </>
    );
  }
  return template;
}
