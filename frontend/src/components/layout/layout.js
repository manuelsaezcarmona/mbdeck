// import { useDispatch } from 'react-redux';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import '../../App.scss';
import './layout.scss';

export function Layout({ children }) {
  const template = (
    <div className="app-container">
      <Header />

      <main className="main">{children}</main>

      <footer className="footer-page"><Footer /></footer>
    </div>
  );

  return template;
}
