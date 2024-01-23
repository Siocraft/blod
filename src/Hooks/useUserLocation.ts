import { LocationObjectCoords, getCurrentPositionAsync, useForegroundPermissions } from "expo-location";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [ location, setLocation ] = useState<LocationObjectCoords>({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    altitude: 0,
    heading: 0,
    speed: 0,
    altitudeAccuracy: 0,
  });

  const [ status ] = useForegroundPermissions();

  useEffect(() => {
    (async () => {
      const { coords } = await getCurrentPositionAsync();
      setLocation(coords);
    })();
  }, [ status ]);

  return location;
};