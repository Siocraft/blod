import { BButton, Skeleton } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export const HospitalCardSkeleton: FC = () => {

  return <View style={styles.cardContainer}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Skeleton variant="text" style={{ width: "60%" }}/>
      <Skeleton variant="text" style={{ width: 60 }}/>
    </View>
    <View style={{ height: 8 }} />
    <Skeleton variant="text" style={{ width: "70%" }} />
    <View style={{ height: 16 }} />
    <Skeleton variant="smallText" style={{ width: "90%" }} />
    <View style={{ height: 4 }} />
    <Skeleton variant="smallText" style={{ width: "30%" }} />

    <View style={{ flexDirection: "row" }}>
      <BButton
        style={{ marginTop: 16, flex: 1 }}
        title="Ver peticiones"
        disabled
        variant="disabled-void"
      />
      <View style={styles.width16} />
      <BButton
        style={{ marginTop: 16, flex: 1 }}
        title="Ver mapa"
        disabled
        variant="disabled"
      />
    </View>
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
  },
  width16: {
    width: 16
  }
});