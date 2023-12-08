import { BButton, BText } from "@components";
import { HospitalFromAPI } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC, useCallback, useMemo } from "react";
import { Dimensions, Linking, Platform, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
const { height, width } = Dimensions.get( "window" );

type HospitalCardProps = Pick<HospitalFromAPI, "name" | "address" | "coordinates" | "city" | "coordinates">;

export const HospitalCard: FC<HospitalCardProps> = ({
  ...hospital
}) => {

  const [ latitude, longitude ] = hospital.coordinates.split(",");

  const coordinates = useMemo(() => ({
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  }), [hospital]);

  const [ LATITUDE_DELTA, LONGITUDE_DELTA ] = useMemo(() => {
    const LATITUDE_DELTA = 0.1;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
    return [ LATITUDE_DELTA, LONGITUDE_DELTA ];
  }, [hospital]);

  const openMaps = useCallback(() => {
    const coordinatesString = `${coordinates.latitude},${coordinates.longitude}`;
    const scheme = Platform.select({ ios: "maps://0,0?q=", android: "geo:0,0?q=" });
    const label = "BLOD: " + hospital.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${coordinatesString}`,
      android: `${scheme}${coordinatesString}(${label})`
    });

    Linking.openURL(url ?? "");
  }, [hospital]);

  const showHospitalDonationRequests = () => {
    return;
  };


  return <View style={styles.cardContainer}>
    <BText color="black" bold style={{ marginBottom: 1 }}>{hospital.name}</BText>
    <BText color="secondary">2 km</BText> 
   
   
    
  </View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    marginTop: 8,
    padding: 16,
    fontWeight: 17,
    marginBottom: 10, 
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: ColorsEnum.white,
    shadowColor: ColorsEnum.darkGray,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
});