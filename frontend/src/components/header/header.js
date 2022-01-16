import { MainMenu } from '../mainmenu/mainmenu';
import { CategoryMenu } from '../categorymenu/categorymenu';

export function Header() {
  const template = (
    <header className="header-page">
      <div className="mainmenu-container">
        <MainMenu />
      </div>
      <div className="categorymenu-container">
        <CategoryMenu />
      </div>

    </header>
  );

  return template;
}
