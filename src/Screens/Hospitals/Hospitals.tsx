import { BText, SignOutButton } from "@components";
import { useHospitals } from "@hooks";
import { FC, useContext, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { HospitalCard } from "./HospitalCard";
import { LoadingContext } from "@context";
import { LinearGradient } from 'expo-linear-gradient';

export const Hospitals: FC = () => {

  const { data: hospitals, isFetching: isFetchingHospitals } = useHospitals()
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    if(isFetchingHospitals) {
      showLoading("Cargando hospitales...")
    } else {
      hideLoading()
    }
  }, [isFetchingHospitals])

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[
        'whitesmoke',
        'whitesmoke',
        'whitesmoke',
        'rgba(255,255,255,0.0)',
      ]} style={[
        styles.titleTextContainer,
        { top }
      ]}>
        <BText
          color="black"
          bold
          style={styles.text}>
            Hospitales cerca de ti
        </BText>
      </LinearGradient>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 56 }} />
        {hospitals?.map(hospital => (
          <HospitalCard
            key={hospital.id}
            {...hospital}
          />
        ))}
      </ScrollView>
      <View style={{ height: 32 }} />
      <SignOutButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTextContainer: {
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 1,
    height: 56,
    width: '100%',
  },
  text: {
    fontSize: 24,
    lineHeight: 40,
    backgroundColor: 'transparent',
  }
});
