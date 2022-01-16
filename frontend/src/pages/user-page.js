import { useSelector } from 'react-redux';
import { UserData } from '../components/userData/userdata';
import { FavoriteList } from '../components/favoritelist/favoritelist';
import { RestrictedPage } from './restricted-page';

export function UserPage() {
  let template = '';
  const user = useSelector((store) => store.user);

  if (user.username === 'invitado' || '') {
    template = (
      <RestrictedPage />
    );
  } else {
    template = (
      <>
        <section className="user-container">
          <h2>Tu Cuenta</h2>

          <UserData />
        </section>
        <section className="favorites-container">
          <FavoriteList />
        </section>

      </>
    );
  }
  return template;
}
