import { Step } from './step';

export function RecipePreparation({ receta }) {
  const htmlsteps = receta.preparation.map((step) => (
    <li className="preparation-steps__item">
      <Step step={step} />
    </li>
  ));

  const template = (

    <section className="preparation">
      <h3 className="preparation__title">PREPARACIÓN</h3>
      <article className="preparation-steps">
        <ul className="preparation-steps__list">
          {htmlsteps}
        </ul>
      </article>

    </section>

  );
  return template;
}
