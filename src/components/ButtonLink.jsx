import "../static/css/ButtonLink.css"

function ButtonLink({type="button", onClick, visual="button", name, className = ""}) {
  let buttonStyle = "button";
  if (visual === "link") {
      buttonStyle = "button-link";
    }
  
  return (
    <button 
      type={type} 
      className={`${buttonStyle} ${className}`}
      onClick={onClick}
      aria-label={name}
      >
      {name}
    </button>
    )
};

export default ButtonLink;