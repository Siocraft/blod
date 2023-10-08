import { BText, GoBack } from "@components";
import { useDonationRequest, useHospital } from "@hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { InformationPiece } from "./InformationPiece";

export type RequestDetailsProps = NativeStackScreenProps<
  RequestStackParamList,
  "RequestDetails"
>;

export const RequestDetails: FC<RequestDetailsProps> = ({
  route: {
    params: { requestId },
  },
}) => {

  const { data: donationRequest } = useDonationRequest(requestId);
  const { data: hospital } = useHospital(donationRequest?.hospitalId ?? "");

  if(!donationRequest || !hospital) return null;

  const { coordinates } = hospital;

  const [ latitude, longitude ] = coordinates.split(", ").map((coordinate) => parseFloat(coordinate));

  return <SafeAreaView style={styles.safeAreaView}>
    <GoBack />
    <ScrollView style={styles.container}>
      <View style={{ height: 16 }} />
      <BText bold size="title" color="black">
        Detalles de la solicitud
      </BText>
      <InformationPiece title="Paciente" value={donationRequest.firstName + " " + donationRequest.lastName} />
      <InformationPiece title="Tipo de donación" value="Sangre completa" />
      <InformationPiece title="Tipo de sangre" value={
        Array.isArray(donationRequest.bloodType) ? donationRequest.bloodType.join(", ") : donationRequest.bloodType
      } />
      <InformationPiece title="Hospital" value={hospital.name} />
      <InformationPiece title="Ubicación" value={hospital.city} />
      <InformationPiece title="Fechas" value="1 - 10 de Enero 2023" />
      <InformationPiece title="Horarios" value="6 am - 10 am" />

      <View style={styles.mapContainer}>
        <BText bold color="secondary" style={styles.mapText}>
          Mapa
        </BText>
        <MapView style={styles.map} region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} showsUserLocation loadingEnabled>
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title={hospital.name}
            description="Presentarse de 6 am a 10 am"
          />
        </MapView>
      </View>
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: ColorsEnum.white,
  },
  container: {
    padding: 16
  },
  mapContainer: {
    marginTop: 32,
    borderRadius: 8,
    backgroundColor: ColorsEnum.backgroundSecondary,
    alignItems: "center",
  },
  mapText: {
    padding: 8,
  },
  map: {
    height: 200,
    width: "100%",
    borderRadius: 8,
  }
});