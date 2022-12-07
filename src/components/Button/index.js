import "./button.css";

function Button({ children, onClick, type }) {
  const buttonClassName = `btn btn--${type}`;
  
  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
