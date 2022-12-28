import { BText } from "@components";
import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useContext } from "react";
import { LoadingContext } from "@context";
import { ColorsEnum } from "@theme";

export const Loading = () => {

  const { message } = useContext(LoadingContext);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
          backgroundColor: "transparent",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./Animations/Loader-Blod.json")}
      />
      {!!message && <BText color="secondary" size="large">
        {message}
      </BText>}
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: ColorsEnum.overlay,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "absolute",
    zIndex: 10
  },
});
