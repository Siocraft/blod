import { LocationObjectCoords, getCurrentPositionAsync } from "expo-location";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [location, setLocation] = useState<LocationObjectCoords>();

  useEffect(() => {
    (async () => {
      const { coords } = await getCurrentPositionAsync();
      setLocation(coords);
    })();
  }, []);

  return location;
};