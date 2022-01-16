import { InstructionMambo } from './instructionmambo';

export function Step({ step }) {
  console.log(step);

  const htmlinstructions = step.instructions.map((instruction) => (
    <li className="step-intructions__item">
      <InstructionMambo instruction={instruction} />
    </li>
  ));

  const template = (
    <div className="step-container">
      <img className="step-container__image" src={step.image} alt={step.title} />
      <div className="step-container__content">
        <h4 className="step-container__title">
          {step.order}
          {' '}
          -
          {' '}
          {step.title}
        </h4>
        <p className="step-container__description">{step.description}</p>
        <div className="step-intructions">
          <ul className="step-intructions__list" />
          {htmlinstructions}
        </div>
      </div>
    </div>
  );
  return template;
}
