/* eslint-disable react/function-component-definition */

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/home-page';
import { CategoryPage } from './pages/category-page';
import { RecipeDetailPage } from './pages/recipe-detail-page';
import { RegisterPage } from './pages/register-page';
import { LoginPage } from './pages/login-page';
import { UserPage } from './pages/user-page';
import { loadUser, setUser } from './redux/actioncreators';

// import { RecipeDetail } from './components/recipedetail/recipedetail';
import { NotFound } from './pages/not-found-page';
import './App.scss';
import { RestrictedPage } from './pages/restricted-page';
import { DetailPage } from './pages/detail-page';

// TODO hacer la comprobacion que si existe o no.
function App() {
  const dispatch = useDispatch();

  if (localStorage.getItem('user')) {
    dispatch(loadUser());
  } else {
    dispatch(setUser({ username: 'invitado' }));
  }
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category/:category/:recipeId" element={<DetailPage />} />

        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="mock" element={<RecipeDetailPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/restricted" element={<RestrictedPage />} />
      </Routes>
    </Layout>

  );
}
// <Route path="recipe/:recipeId" element={<RecipeDetail />} />
export default App;
