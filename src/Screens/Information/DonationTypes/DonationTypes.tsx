import { BText, FloatingInformation, GoBack } from "@components";
import { ColorsEnum } from "@theme";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

interface DonationTypeSection {
  title: string;
  text: string;
}

const DONATION_TYPE_SECTION_KEY = "DONATION_TYPE_SECTION_KEY_";

const donationTypeSections: DonationTypeSection[] = [
  {
    title: "Donación de sangre completa",
    text: "La sangre extraida puede ser utilizada completa o separada en partes (glóbulos rojos, glóbulos blancos, plaquetas y plasma)."
  },
  {
    title: "Donación de plaquetas",
    text: "Se extraen las plaquetas, estas son las células encargadas de la coagulación sanguínea. Una máquina separará las plaquetas y devolverá a tu cuerpo los glóbulos rojos y el mayor plasma extraído."
  },
  {
    title: "Donación de plasma",
    text: "Con una máquina se extrae el plasma, esta es la parte líquida de la sangre, para después devolver al cuerpo los glóbulos y las plaquetas."
  }
];

export const DonationTypes = () => {
  return <SafeAreaView style={styles.safeAreaView}>
    <GoBack />
    <ScrollView style={styles.container}>
      <View style={styles.donationTypesContainer}>
        <View style={{ height: 16 }} />
        <BText size="title" bold color="black">
            Tipos de donación de sangre
        </BText>
        <View style={{ height: 40 }} />
        {
          donationTypeSections.map((section, index) => {
            return <View key={DONATION_TYPE_SECTION_KEY + index}>
              <BText style={styles.donationTypeTitleText}>
                {section.title}
              </BText>
              <BText style={styles.donationTypeText}>
                {section.text}
              </BText>
            </View>;
          })
        }
      </View>
    </ScrollView>
    <FloatingInformation
      link="https://www.hhs.gov/givingequalsliving/es/donasangre/tipos-de-donacion"
      text="Conoce más en:"
    />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: ColorsEnum.white,
  },
  container: {
    padding: 16,
  },
  donationTypesContainer: {
    paddingHorizontal: 24
  },
  donationTypeTitleText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: ColorsEnum.black,
    marginBottom: 18
  },
  donationTypeText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: ColorsEnum.black,
    marginBottom: 60
  }
});