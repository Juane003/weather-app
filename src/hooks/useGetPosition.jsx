import { useState, useEffect } from "react";

const useGetPosition = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    const getPosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }) 
    }

    getPosition();

  }, []);

  return { latitude, longitude }
}

export default useGetPosition;