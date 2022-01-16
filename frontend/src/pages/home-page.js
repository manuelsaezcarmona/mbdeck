import { HeroSection } from '../components/herosection/herosection';
import './home-page.scss';

export function HomePage() {
  const template = (
    <>
      <HeroSection />
      <h1 className="HomePage__Header">MamboDeck, miles de recetas para tu mambo</h1>
    </>
  );
  return template;
}
