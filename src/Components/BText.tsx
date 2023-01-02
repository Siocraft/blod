import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

export interface BTextProps extends TextProps {
  bold?: boolean;
  superBold?: boolean;
  size?: "small" | "medium" | "large" | "title";
  color?: "primary" | "secondary" | "black" | "white" | "gray" | "darkGray";
}

export const BText: FC<BTextProps> = ({
  style,
  bold,
  superBold,
  size = "medium",
  color = "primary",
  children,
  ...rest
}) => {
  const textStyles = StyleSheet.flatten([
    styles[size],
    styles[color],
    bold && styles.bold,
    superBold && styles.superBold,
    style,
  ]);

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  medium: {
    fontSize: 14,
    lineHeight: 20,
  },
  large: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
  },
  bold: {
    fontWeight: "700",
  },
  primary: {
    color: ColorsEnum.primary,
  },
  secondary: {
    color: ColorsEnum.secondary,
  },
  black: {
    color: ColorsEnum.black,
  },
  white: {
    color: ColorsEnum.white,
  },
  gray: {
    color: ColorsEnum.gray,
  },
  darkGray: {
    color: ColorsEnum.darkGray,
  },
  superBold: {
    fontWeight: "900",
  },
});
