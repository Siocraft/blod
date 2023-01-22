import { BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { InformationButton } from "./InformationButton";

export const Information: FC = () => {

  const { navigateToDonationRequirements } = useAppNavigation()

  return <SafeAreaView style={styles.safeAreaView}>
    <ScrollView style={styles.container}>
      <BText size="title" bold color="secondary">
        Información
      </BText>
      <View style={{ height: 32 }} />
      <BText size="large" color="black" style={styles.text}>
        Blod es una aplicación hecha con el propósito de facilitar la búsqueda de donadores de sangre.
        Tenemos la intención de fomentar que las personas participen en la donación de sangre pues actualmente en México solo el 3% dona voluntariamente y el resto es llamado por reposición o por un familiar.
        <BText size="large" color="black" bold> ¡Animate a salvar vidas! ¡Tu apoyo puede hacer la diferencia!</BText>
      </BText>

      <View style={{ height: 32 }} />
      <InformationButton onPress={navigateToDonationRequirements} title="Requisitos para poder donar" />
      <View style={{ height: 16 }} />
      <InformationButton onPress={() => {}} title="Tipos de donación de sangre" />
      <View style={{ height: 16 }} />
      <InformationButton onPress={() => {}} title="Proceso de donación" />
      <View style={{ height: 16 }} />
      <InformationButton onPress={() => {}} title="Preguntas frecuentes al donar" />
    </ScrollView>
  </SafeAreaView>
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: ColorsEnum.white,
  },
  container: {
    flex: 1,
    padding: 42
  },
  text: {
    fontWeight: '500',
    lineHeight: 32,
  }
});
