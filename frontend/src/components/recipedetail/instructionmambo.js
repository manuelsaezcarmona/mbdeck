export function InstructionMambo({ instruction }) {
  const template = (
    <div className="instruction-container">
      <img className="instruction__icon" src={instruction.instructionIcon} alt={instruction.instructionName} />
      <div className="instruction__content">
        <p className="instruction__order">{instruction.instructionName}</p>
        <p className="instruction__param">{instruction.intructionDuration}</p>
      </div>
    </div>
  );

  return template;
}
