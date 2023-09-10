import { BText } from "@components";
import { useHospitals } from "@hooks";
import { ColorsEnum } from "@theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { HospitalCard } from "./HospitalCard";
import { HospitalCardSkeleton } from "./HospitalCardSkeleton";

const skeletonArray = Array.from({ length: 3 }, (_, i) => i);

export const Hospitals: FC = () => {

  const { data: hospitals, isLoading: isLoadingHospitals } = useHospitals();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={StyleSheet.flatten([
      styles.container,
      {
        marginBottom: -bottom,
      }
    ])}>
      <LinearGradient colors={[
        ColorsEnum.whitesmoke,
        ColorsEnum.whitesmoke,
        ColorsEnum.whitesmoke,
        ColorsEnum.whiteTransparent,
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
        {
          isLoadingHospitals && skeletonArray.map((_, i) => (
            <HospitalCardSkeleton key={"Hospital_Skeleton_Card_" + i} />
          ))
        }
        {isLoadingHospitals
          ? null
          : hospitals?.map(hospital => (
            <HospitalCard
              key={hospital.id}
              {...hospital}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTextContainer: {
    paddingHorizontal: 16,
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 1,
    height: 56,
    width: "100%",
  },
  text: {
    fontSize: 24,
    lineHeight: 40,
    backgroundColor: "transparent",
  }
});
