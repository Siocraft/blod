import { AgeSvg, AlcoholSvg, BodyWeightSvg, HeartBeatSvg, IDSvg, NoFoodSvg, PillSvg, SurgerySvg, TattooSvg, VaccineSvg, VirusSvg } from "@assets";
import { BText, FloatingInformation, GoBack } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Requirements: FC = () => {

  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <GoBack/>
      <ScrollView style={styles.container}>
        <View style={{ height: 16 }} />
        <BText size="title" bold color="black">Requisitos para poder donar sangre</BText>
        <View style={{ height: 40 }} />
        <View style={styles.infoContainer}>
          <BText size="large" color="black" style={styles.infoText}>Acudir con una identificación oficial</BText>
          <View style={styles.icon}>
            <IDSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>Tener entre 18 y 65 años de edad</BText>
          <View style={styles.icon}>
            <AgeSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>Pesar más de 50 kilogramos</BText>
          <View style={styles.icon}>
            <BodyWeightSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>Deberás tener un ayuno mínimo de 4 hrs y mantenerte hidratado</BText>
          <View style={styles.icon}>
            <NoFoodSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>No haber consumido alcohol en las últimas 72 hrs</BText>
          <View style={styles.icon}>
            <AlcoholSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>No haber estado enfermo los últimos 14 días</BText>
          <View style={styles.icon}>
            <VirusSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>No haber tomado medicamentos en los últimos 5 días</BText>
          <View style={styles.icon}>
            <PillSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>No contar con perforaciones, ni tatuajes en los últimos 12 meses</BText>
          <View style={styles.icon}>
            <TattooSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>No haber sido operado en los ultimos 6 meses</BText>
          <View style={styles.icon}>
            <SurgerySvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>No haber sido vacunado en los últimos 30 días</BText>
          <View style={styles.icon}>
            <VaccineSvg />
          </View>
          <BText size="large" color="black" style={styles.infoText}>En caso de presión arterial alta, será necesario tenerla controlada</BText>
          <View style={styles.icon}>
            <HeartBeatSvg />
          </View>
          <View style={{ height: bottom }} />
        </View>
      </ScrollView>
      <FloatingInformation
        link="https://www.gob.mx/cnts/acciones-y-programas/donacion-de-sangre-79985"
        text="Consulta más datos en "
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: ColorsEnum.white,
  },
  container: {
    padding: 16,
    paddingTop: 0,
    marginBottom: 56
  },
  infoContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    textAlign: "center",
  },
  icon: {
    marginVertical: 32,
  },
  infoText: {
    textAlign: "center",
  },
  bottomTextContainer: {
    backgroundColor: ColorsEnum.backgroundSecondary,
    padding: 16,
    width: "100%",
    borderRadius: 8,
  }
});
