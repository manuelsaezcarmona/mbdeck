import { Link } from 'react-router-dom';
import './categorymenu.scss';

// menuItems viene del Header
export function CategoryMenu() {
  const categoryMenuItems = [
    { path: '/category/carnes', label: 'carnes', title: 'carnes' },
    { path: '/category/pescados', label: 'pescados', title: 'pescados' },
    { path: '/category/verduras', label: 'verduras', title: 'verduras' },
    { path: '/category/legumbres', label: 'legumbres', title: 'legumbres' },
    { path: '/category/postres', label: 'postres', title: 'postres' }

  ];

  const categoryItems = categoryMenuItems.map((item) => (
    <li key={item.label}>
      <Link className="category-menu-nav__link" to={item.path} title={item.title}>
        {item.label}
      </Link>
    </li>
  ));

  const template = (
    <nav className="category-menu-nav">
      <ul className="category-menu-nav__list">{categoryItems}</ul>
    </nav>
  );
  return template;
}
