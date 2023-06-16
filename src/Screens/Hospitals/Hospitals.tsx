import { BText, SignOutButton } from "@components";
import { useHospitals } from "@hooks";
import { FC, useContext, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HospitalCard } from "./HospitalCard";
import { LoadingContext } from "@context";

export const Hospitals: FC = () => {

  const { data: hospitals, isFetching: isFetchingHospitals } = useHospitals()
  const { showLoading, hideLoading } = useContext(LoadingContext);

  useEffect(() => {
    if(isFetchingHospitals) {
      showLoading("Cargando hospitales...")
    } else {
      hideLoading()
    }
  }, [isFetchingHospitals])

  return (
    <SafeAreaView style={styles.container}>
      <BText color="black" bold style={styles.text}>Hospitales cerca de ti</BText>
      <ScrollView>
        {hospitals?.map(hospital => (
          <HospitalCard
            key={hospital.id}
            {...hospital}
          />
        ))}
      </ScrollView>
      <SignOutButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
    lineHeight: 40,
  }
});
