import { BText } from "@components";
import { FC } from "react";
import { View, StyleSheet } from "react-native";

export const Menu: FC = () => {
  return (
    <View style={styles.container}>
      <BText style={styles.text}>Menú</BText>
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