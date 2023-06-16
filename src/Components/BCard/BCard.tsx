import { ColorsEnum } from "@theme";
import { FC, PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface BCard extends PropsWithChildren {
  variant?: "regular" | "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
}

export const BCard: FC<BCard> = ({
  children,
  variant = "regular",
  style,
}) => {
  return <View style={StyleSheet.flatten([
    styles.card,
    styles[variant],
    style
  ])}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: ColorsEnum.white,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
  },
  regular: {
    shadowColor: ColorsEnum.darkGray,
  },
  secondary: {
    shadowColor: ColorsEnum.secondary,
  },
  primary: {
    shadowColor: ColorsEnum.primary,
  },
})