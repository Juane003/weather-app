const Button = ({ text, onClick, value, isClicked }) => {
  return (
    <button className={`bg-cyan-200 m-1 p-4 rounded-lg hover:bg-cyan-400 ${isClicked ? "bg-cyan-400": null}`} onClick={onClick} value={value}>{text}</button>
  ) 
}

export default Button;