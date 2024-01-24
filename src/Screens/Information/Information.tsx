import { BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { InformationButton } from "./InformationButton";

export const Information: FC = () => {

  const {
    navigateToDonationRequirements,
    navigateToDonationTypes,
    navigateToFrequentlyAskedQuestions,
    navigateBloodGroupCompatibility,
  } = useAppNavigation();

  return <SafeAreaView style={styles.safeAreaView}>
    <ScrollView style={styles.container}>
      <BText style={styles.titleText} size="title" bold color="secondary">
        Información
      </BText>
      <View style={{ height: 32 }} />
      <BText size="large" color="black" style={styles.text}>
        <BText size="large" color="secondary" style={styles.text}>Blod</BText> es una aplicación hecha con el propósito de facilitar la <BText size="large" color="secondary" style={styles.text}>búsqueda de donadores de sangre</BText>.
        Tenemos la intención de fomentar que las personas participen en la donación de sangre pues actualmente en México <BText size="large" color="secondary" style={styles.text}>solo el 3% dona voluntariamente</BText> y el resto es llamado por reposición o por un familiar.
        <BText size="large" color="secondary" style={styles.text}> ¡Animate a salvar vidas! ¡Tu apoyo puede hacer la diferencia!</BText>
      </BText>

      <View style={{ height: 32 }} />
      <InformationButton onPress={navigateToDonationRequirements} title="Requisitos para poder donar" />
      <View style={{ height: 16 }} />
      <InformationButton onPress={navigateToDonationTypes} title="Tipos de donación de sangre" />
      <View style={{ height: 16 }} />
      <InformationButton onPress={() => { return; }} title="Proceso de donación" />
      <View style={{ height: 16 }} />
      <InformationButton onPress={navigateBloodGroupCompatibility} title="Compatibilidad entre grupos sanguineos" />
      <View style={{ height: 16 }} />
      <InformationButton onPress={navigateToFrequentlyAskedQuestions} title="Preguntas frecuentes al donar" />
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: ColorsEnum.white,
  },
  container: {
    flex: 1,
    padding: 16
  },
  titleText: {
    fontSize: 24,
    lineHeight: 32
  },
  text: {
    fontWeight: "500",
    lineHeight: 32,
  }
});
