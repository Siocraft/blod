import { BText } from "@components";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

export const Information: FC = () => {
  return (
    <View style={styles.container}>
      <BText style={styles.text}>Información</BText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
