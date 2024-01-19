import { LocationObjectCoords, getCurrentPositionAsync } from "expo-location";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [location, setLocation] = useState<LocationObjectCoords>({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    altitude: 0,
    heading: 0,
    speed: 0,
    altitudeAccuracy: 0,
  });

  useEffect(() => {
    (async () => {
      const { coords } = await getCurrentPositionAsync();
      setLocation(coords);
    })();
  }, []);

  return location;
};