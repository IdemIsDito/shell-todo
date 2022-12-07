import "./button.css";

function Button({ id, children, onClick, type }) {
  const buttonClassName = `btn btn--${type}`;
  
  return (
    <button data-testid={id} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
