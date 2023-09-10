import { BButton, Skeleton } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export const HospitalCardSkeleton: FC = () => {

  return <View style={styles.cardContainer}>
    <Skeleton variant="text" />
    <View style={{ height: 8 }} />
    <Skeleton variant="text" style={{ width: "70%" }} />
    <View style={{ height: 16 }} />
    <Skeleton variant="smallText" style={{ width: "90%" }} />
    <View style={{ height: 4 }} />
    <Skeleton variant="smallText" style={{ width: "50%" }} />
    <View style={{ height: 4 }} />
    <Skeleton variant="smallText" style={{ width: "30%" }} />
    <View style={{ height: 16 }} />
    <Skeleton variant="smallText" style={{ height: 250, borderRadius: 8 }} />

    <BButton
      style={{ marginTop: 16 }}
      title="Mostrar solicitudes de este hospital"
      disabled
      variant="disabled"
    />
    <BButton
      style={{ marginTop: 16 }}
      title="Llamar"
      disabled
      variant="disabled-void"
    />
    <BButton
      style={{ marginTop: 16 }}
      title="Abrir mapas"
      disabled
      variant="disabled-transparent"
    />
  </View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: ColorsEnum.white,
    shadowColor: ColorsEnum.darkGray,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  map: {
    height: 200,
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    borderColor: ColorsEnum.primary,
    borderWidth: 2,
  }
});