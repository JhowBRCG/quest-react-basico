import "./button.css"

const alertLabelButton = (props) => {
  alert(`A label deste botão é ${props.label}`);
};

const Button = (props) => {
  return (
    <button 
    className="button"
    onClick={() => {alertLabelButton(props)}}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  text: "clique aqui",
};

export default Button;
