import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Pressable, PressableProps, PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { BText, BTextProps } from "./BText";

interface BButtonProps extends PressableProps {
  text?: BTextProps;
  title: string;
  style?: StyleProp<ViewStyle>,
  variant?:
    | "secondary"
    | "primary"
    | "secondary-void"
    | "primary-void"
    | "transparent"
    | "transparent-primary";
}

export const BButton: FC<BButtonProps> = ({
  title,
  text,
  variant = "primary",
  style,
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
    case "transparent-primary":
      textColor = "primary";
      break;
    default:
      textColor = "secondary";
      break;
  }

  const pressableStyle: (state: PressableStateCallbackType) => StyleProp<ViewStyle>  = ({ pressed }) => StyleSheet.flatten([
    styles.button,
    styles[variant],
    style,
    pressed && pressedStyles[variant],
  ]);

  return (
    <Pressable style={pressableStyle} {...rest}>
      {
        ({ pressed }) => {
          return title ? (
            <BText
              bold
              color={textColor}
              {...text}
              style={pressed && pressedTextStyles[variant]}
            >
              {title}
            </BText>
          ) : null
        }
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  primary: {
    backgroundColor: ColorsEnum.primary,
    shadowColor: ColorsEnum.darkGray,
  },
  secondary: {
    backgroundColor: ColorsEnum.secondary,
    shadowColor: ColorsEnum.darkGray,
  },
  "primary-void": {
    borderWidth: 1,
    borderColor: ColorsEnum.primary,
    shadowColor: ColorsEnum.primary,
  },
  "secondary-void": {
    borderWidth: 1,
    borderColor: ColorsEnum.secondary,
    shadowColor: ColorsEnum.secondary,
  },
  transparent: {
    backgroundColor: "transparent",
  },
  "transparent-primary": {
    backgroundColor: "transparent",
  },
  whiteText: {
    color: ColorsEnum.white,
  },
});

const pressedStyles = StyleSheet.create({
  primary: {
    backgroundColor: "transparent",
    borderColor: ColorsEnum.primary,
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: ColorsEnum.secondary,
    borderWidth: 1,
  },
  "primary-void": {
    backgroundColor: ColorsEnum.primary,
  },
  "secondary-void": {
    backgroundColor: ColorsEnum.secondary,
  },
  transparent: {
    backgroundColor: ColorsEnum.secondary,
  },
  "transparent-primary": {
    backgroundColor: ColorsEnum.primary,
  }
});

const pressedTextStyles = StyleSheet.create({
  primary: {
    color: ColorsEnum.primary,
  },
  secondary: {
    color: ColorsEnum.secondary,
  },
  "primary-void": {
    color: ColorsEnum.white,
  },
  "secondary-void": {
    color: ColorsEnum.white,
  },
  transparent: {
    color: ColorsEnum.white,
  },
  "transparent-primary": {
    color: ColorsEnum.white,
  },
});
