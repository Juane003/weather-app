import Card from "../Card/Card";
import { formatDate } from "../../Utils/utils";

const API_IMG = "http://openweathermap.org/img/wn/";

const CardList = ( {data, time} ) => {
  
  const renderCards = data.list.map((element, index) => {

    const { dt_txt, weather, main} = element;

    const day = dt_txt.includes(`${time}:00:00`);
    
    const date = formatDate(dt_txt);
    const image = `${API_IMG}${weather[0].icon}@2x.png`;
    const temp = main.temp.toFixed(1);
    const description = weather[0].description;

    if (day) {
      return <Card
        text={date}
        time={`${time}:00`}
        img={image}
        temp={temp}
        description={description}
        key={index}
        />
      }

    return null;

    });

  return(
    <div className="flex flex-row items-center">
      {renderCards}
    </div>
  )
}

export default CardList