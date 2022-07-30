const Card = ({ text, img, temp, description, onClick, time }) => {
  return (
    <div className="flex flex-col bg-slate-300 p-4 w-56 h-72 m-2 items-center border border-black" onClick={onClick}>
      <h1>{text}</h1>
      <h2>{time}</h2>
      <img src={img} className="flex w-32 h-32"></img>
      <div className="flex flex-row">
        <h2 className="pr-1">{`${temp} °C`}</h2>
      </div>
      <h3>{description}</h3>
    </div>
  )
}

export default Card;