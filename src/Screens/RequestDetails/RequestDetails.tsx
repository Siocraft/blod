import { BText, GoBack } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { ColorsEnum } from "@theme";

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