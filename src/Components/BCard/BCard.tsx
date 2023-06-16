import { ColorsEnum } from "@theme";
import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

interface BCard extends PropsWithChildren {
  variant?: "regular" | "primary" | "secondary";
}

export const BCard: FC<BCard> = ({
  children,
  variant = "regular",
}) => {
  return <View style={StyleSheet.flatten([
    styles.card,
    styles[variant]
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