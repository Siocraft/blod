import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { BText, BTextProps } from "./BText";

interface BButtonProps extends PressableProps {
  text: BTextProps;
  title: string;
  variant: "secondary" | "primary";
}

export const BButton: FC<BButtonProps> = ({
  title,
  text,
  variant = "primary",
  ...rest
}) => {
  return (
    <Pressable
      style={
        StyleSheet.flatten([
          styles.button,
          variant === "secondary" && styles.secondaryButton,
          variant === "primary" && styles.primaryButton
        ])
      }
      {...rest}
    >
      {title && <BText color="white" {...text}>{title}</BText>}
    </Pressable>
  )
    
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  primaryButton: {
    backgroundColor: ColorsEnum.primary,
  },
  secondaryButton: {
    backgroundColor: ColorsEnum.secondary,
  },
  whiteText: {
    color: ColorsEnum.white,
  },
});