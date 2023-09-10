import { BText } from "@components";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export const ErrorScreen: FC = () => {
  return (
    <View style={styles.animationContainer}>
      {/* <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#fff",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./Animations/Error-Blod.json")}
      /> */}
      <BText size="large" style={styles.text}>
        Ha ocurrido un error
      </BText>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    marginTop: 16,
  },
});
