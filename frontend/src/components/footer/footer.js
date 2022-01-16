import { FaHandHoldingHeart } from 'react-icons/fa';
import './footer.scss';
// eslint-disable-next-line react/function-component-definition
export function Footer() {
  return (
    <address className="footer-page__address">
      Hecho con
      {' '}
      <FaHandHoldingHeart />
      {' '}
      por
      {' '}
      <a className="footer-page__link" href="https://manuelsaezcarmona.netlify.app/">Manuel Saez Carmona</a>
    </address>
  );
}
