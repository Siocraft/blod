import { BButton, BText } from "@components";
import { HospitalFromAPI, useDistanceFromTwoCoordinates, useUserLocation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC, useCallback, useMemo, useState } from "react";
import { Dimensions, Linking, Platform, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
const { height, width } = Dimensions.get( "window" );

type HospitalCardProps = Pick<HospitalFromAPI, "name" | "address" | "coordinates" | "city" | "coordinates">;

export const HospitalCard: FC<HospitalCardProps> = ({
  ...hospital
}) => {

  const userLocation = useUserLocation();
  const [showMap, setShowMap] = useState(false);

  const [ latitude, longitude ] = hospital.coordinates.split(",");
  const splittedAddress = hospital.address.split(",");

  const city = splittedAddress.at(-3)?.replace(/\d/g, "").trim();

  const [hospitalCoordinates, userCoordinates] = useMemo<Coordinates[]>(() => {
    return [
      {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      {
        latitude: userLocation?.latitude ?? 0,
        longitude: userLocation?.longitude ?? 0,
      }
    ];
  }, [hospital, userLocation]);

  const distance = useDistanceFromTwoCoordinates(hospitalCoordinates, userCoordinates);

  const openMaps = useCallback(() => {
    const coordinatesString = `${hospitalCoordinates.latitude},${hospitalCoordinates.longitude}`;
    const scheme = Platform.select({ ios: "maps://0,0?q=", android: "geo:0,0?q=" });
    const label = "BLOD: " + hospital.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${coordinatesString}`,
      android: `${scheme}${coordinatesString}(${label})`
    });

    Linking.openURL(url ?? "");
  }, [hospital]);

  const [ LATITUDE_DELTA, LONGITUDE_DELTA ] = useMemo(() => {
    const LATITUDE_DELTA = 0.1;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
    return [ LATITUDE_DELTA, LONGITUDE_DELTA ];
  }, [hospital]);

  const toggleMap = () => {
    setShowMap(prevShowMap => !prevShowMap);
  };

  const showHospitalDonationRequests = () => {
    return;
  };

  return <View style={styles.card}>
    <View style={styles.row}>
      <BText color="black" bold style={{ marginBottom: 1 }}>
        {hospital.name}
        <BText color="darkGray"> en {city}</BText>
      </BText>
      <BText color="secondary">{Math.round(distance)} km</BText>   
    </View>
    <View style={styles.addressText}>
      <BText color="darkGray">{hospital.address}</BText>
    </View>

    {showMap && (
      <>
        <MapView
          style={styles.map}
          showsUserLocation
          loadingEnabled
          initialRegion={{
            latitude: hospitalCoordinates.latitude,
            longitude: hospitalCoordinates.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          zoomControlEnabled={false}
          zoomEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          zoomTapEnabled={false}
          toolbarEnabled={false}
          moveOnMarkerPress={false}
          cacheEnabled={true}
        >
          <Marker
            coordinate={hospitalCoordinates}
            title={hospital.name}
            description="Presentarse de 6 am a 10 am"
          />
        </MapView>
        <BButton onPress={openMaps} variant="primary-void" style={styles.openMapsButton} title="Ver en mapas" />
      </>
    )}

    <View style={styles.row}>
      <BButton variant="primary-void" style={styles.flex1} onPress={showHospitalDonationRequests} title="Ver peticiones" />
      <View style={styles.width16} />
      <BButton style={styles.flex1} onPress={toggleMap} title={
        showMap ? "Ocultar mapa" : "Ver mapa"
      } />
    </View>
  </View>;
};

const styles = StyleSheet.create({
  card: {
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
    marginTop: 8,
    padding: 16,
    fontWeight: 17,
  },
  addressText: {
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", 
  },
  flex1: {
    flex: 1
  },
  width16: {
    width: 16
  },
  map: {
    height: 200,
    width: "100%",
    borderRadius: 8,
    borderColor: ColorsEnum.primary,
    borderWidth: 2,
    marginBottom: 16,
  },
  openMapsButton: {
    marginBottom: 16,
  }
});