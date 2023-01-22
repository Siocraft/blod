import { BText, GoBack } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { ColorsEnum } from "@theme";
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

  return <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <GoBack />
      <View style={{ height: 16 }} />
      <BText bold size="title" color="black">
        Detalles de la solicitud
      </BText>
      <InformationPiece title="Paciente" value="Santiago González Siordia" />
      <InformationPiece title="Tipo de donación" value="Sangre completa" />
      <InformationPiece title="Tipo de sangre" value="B+" />
      <InformationPiece title="Hospital" value="Puerta de Hierro" />
      <InformationPiece title="Ubicación" value="Tlajomulco de Zuñiga" />
      <InformationPiece title="Fechas" value="1 - 10 de Enero 2023" />
      <InformationPiece title="Horarios" value="6 am - 10 am" />
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: ColorsEnum.white,
  },
  container: {
    padding: 16
  }
})