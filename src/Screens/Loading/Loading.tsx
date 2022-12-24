import { BText } from "@components";
import { View, StyleSheet } from "react-native";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <BText>Loading...</BText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
