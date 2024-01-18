import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { BText } from "./BText";

type BTextInputProps = TextInputProps & {
  disabled?: boolean;
  icon?: () => JSX.Element;
  error?: never;
  errorMessage?: never;
  label?: string;
  variant?: "primary" | "secondary";
  containerStyle?: ViewStyle;
  onClear?: () => void;
};

type BTextInputPropsWithError = Omit<
  BTextInputProps,
  "error" | "errorMessage"
> & {
  error: boolean;
  errorMessage?: string;
};

type Props = BTextInputProps | BTextInputPropsWithError;

export const BTextInput: FC<Props> = ({
  error = false,
  errorMessage,
  disabled,
  icon,
  label,
  variant = "secondary",
  containerStyle,
  value,
  onClear,
  ...props
}) => {
  return (
    <>
      {label ? <BText style={{ marginBottom: 4 }} color={error ? "primary" : "black"}>{label}</BText> : null}
      <View
        style={[
          styles.inputContainer,
          styles[variant],
          error && { borderColor: ColorsEnum.error },
          disabled && {
            backgroundColor: ColorsEnum.gray,
            borderColor: ColorsEnum.gray,
          },
          containerStyle,
        ]}
      >
        {icon && icon()}
        <TextInput
          placeholderTextColor={ColorsEnum.darkGray}
          value={value}
          {...props}
          style={[
            { flex: 1, marginLeft: icon ? 8 : 0 },
            disabled && { color: ColorsEnum.darkGray },
            props.style,
          ]}
        />
        {value && value.length > 0 && onClear ? (
          <MaterialCommunityIcons onPress={onClear} name="delete-circle" size={24} color={ColorsEnum[variant]} />
        ): null}
      </View>
      {error && <BText>{errorMessage}</BText>}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
  },
  primary: {
    borderColor: ColorsEnum.primary,
  },
  secondary: {
    borderColor: ColorsEnum.secondary,
  },
});
