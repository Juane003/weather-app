import { useEffect, useState } from "react";
import { getData } from "../../Utils/utils";
import { SearchBar, ButtonList, CardList, LoadingScreen } from "../../Components/index"
import useGetPosition from "../../hooks/useGetPosition";

const timesList = ["00", "03", "06", "09", "12", "15", "18", "21"];

const API_KEY = "d27cea1bd1fef3427f0fa23a517fd1ec";
const API_URL = "https://api.openweathermap.org/data/2.5/forecast?";

const Dashboard = () => {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isActive, setIsActive] = useState({4:true});
  const [time, setTime] = useState("12");

  const { latitude, longitude } = useGetPosition();

  useEffect(() => {
    if (latitude && longitude) {
      const URL = `${API_URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
      const fetchData = async () => {
        const data = await getData(URL);
        if (data !== null) {
          setWeatherData(data);
        }
      }
      fetchData();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (city) {
      const URL = `${API_URL}q=${city}&units=metric&appid=${API_KEY}`;
      const fetchData = async () => {
        const data = await getData(URL);
        if (data !== null) {
          setWeatherData(data);
        }
      }
      fetchData();
    }
  }, [city]);

   if (!weatherData) return <LoadingScreen/>;

  const handleOnKey = (event) => {
    if (event.key === "Enter") {
      setCity(event.target.value.toString());
    }
  }

  const handleOnClick = (event, index) => {
    setTime(event.target.value);

    setIsActive( (prev) => {
      const isActive = {...prev.isActive};

      isActive[index] = !isActive[index];

      return isActive;
    });
  }

  return (
    <div className="flex flex-col items-center">

      <SearchBar 
        onKeyPress={handleOnKey}
        value={city}
      />

      <div className="flex flex-row">
        <ButtonList 
            buttons={timesList}
            onClick={handleOnClick} 
            active={isActive}
        />

        <CardList 
          data={weatherData} 
          time={time}
        />

      </div>
    </div>
  );
}

export default Dashboard;