import { BText } from "@components";
import { LoadingContext } from "@context";
import { ColorsEnum } from "@theme";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
// @ts-expect-error - BouncingPreloader has no types
import BouncingPreloader from "react-native-bouncing-preloader";

const icons = [
  "https://www.shareicon.net/data/128x128/2016/10/05/839072_medical_512x512.png",
  "https://www.shareicon.net/data/128x128/2016/08/18/814533_medical_512x512.png",
  "https://www.shareicon.net/data/128x128/2016/10/05/839073_medical_512x512.png",
  "https://www.shareicon.net/data/128x128/2016/05/21/768517_medical_512x512.png",
  "https://www.shareicon.net/data/128x128/2016/05/21/768503_syringe_512x512.png",
  "https://www.shareicon.net/data/128x128/2016/05/21/768506_science_512x512.png"
];

export const Loading = () => {
  const { message } = useContext(LoadingContext);
  return (
    <View style={styles.screenContainer}>
      <BouncingPreloader
        icons={icons}
        leftDistance={-100}
        rightDistance={-150}
        speed={1000}
      />
      <BText bold style={styles.loadingText}>{message}</BText>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: ColorsEnum.overlay,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "absolute",
    zIndex: 10,
  },
  loadingText: {
    color: ColorsEnum.white,
    fontSize: 20,
    lineHeight: 24,
  }
});
