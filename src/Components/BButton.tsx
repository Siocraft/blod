import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { BText, BTextProps } from "./BText";

interface BButtonProps extends PressableProps {
  text?: BTextProps;
  title: string;
  variant?:
    | "secondary"
    | "primary"
    | "secondary-void"
    | "primary-void"
    | "transparent";
}

export const BButton: FC<BButtonProps> = ({
  title,
  text,
  variant = "primary",
  ...rest
}) => {
  let textColor: BTextProps["color"] = "white";

  switch (variant) {
    case "primary":
      textColor = "white";
      break;
    case "secondary":
      textColor = "white";
      break;
    case "secondary-void":
      textColor = "secondary";
      break;
    case "primary-void":
      textColor = "primary";
      break;
    case "transparent":
      textColor = "secondary";
      break;
    default:
      textColor = "secondary";
      break;
  }

  const pressableStyle = StyleSheet.flatten([
    styles.button,
    variant === "secondary" && styles.secondaryButton,
    variant === "primary" && styles.primaryButton,
    variant === "secondary-void" && styles.secondaryVoid,
    variant === "primary-void" && styles.primaryVoid,
    variant === "transparent" && styles.transparentButton,
  ]);

  return (
    <Pressable style={pressableStyle} {...rest}>
      {title && (
        <BText bold color={textColor} {...text}>
          {title}
        </BText>
      )}
    </Pressable>
  );
};

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
  primaryVoid: {
    borderWidth: 1,
    borderColor: ColorsEnum.primary,
  },
  secondaryVoid: {
    borderWidth: 1,
    borderColor: ColorsEnum.secondary,
  },
  transparentButton: {
    backgroundColor: "transparent",
  },
  whiteText: {
    color: ColorsEnum.white,
  },
});
