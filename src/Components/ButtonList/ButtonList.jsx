import Button from "../Button/Button";

const ButtonList = ( {buttons, onClick, active} ) => {

  const renderButtons = buttons.map((element, index) => {
    
    return <Button 
      value={element}
      text={element} 
      isClicked={active[index]}
      key={index} 
      onClick={(event) =>onClick(event, index)}
      />
  });

  return (
    <div className="grid grid-cols-2">
      {renderButtons}
    </div>
  )

}

export default ButtonList;