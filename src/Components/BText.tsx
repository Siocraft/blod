import { ColorsEnum } from '@theme';
import { FC } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

interface BTextProps extends TextProps {
  bold?: boolean;
  size?: "small" | "medium" | "large" | "title";
  color?: "primary" | "secondary" | "tertiary" | "black";
}

export const BText: FC<BTextProps> = ({
  style,
  bold,
  size = "medium",
  color = "primary",
  children,
  ...rest
}) => {
  const textStyles = StyleSheet.flatten([
    styles[size],
    styles[color],
    bold && styles.bold,
    style,
  ]);

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  primary: {
    color: ColorsEnum.primary,
  },
  secondary: {
    color: ColorsEnum.secondary,
  },
  tertiary: {
    color: ColorsEnum.tertiary,
  },
  black: {
    color: ColorsEnum.black,
  },
});