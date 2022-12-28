import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { BText } from "./BText";

type BTextInputProps = TextInputProps & {
  disabled?: boolean;
  icon?: () => JSX.Element;
  error?: never;
  errorMessage?: never;
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
  ...props
}) => {
  return (
    <>
      <View
        style={[
          styles.inputContainer,
          error && { borderColor: ColorsEnum.error },
          disabled && {
            backgroundColor: ColorsEnum.gray,
            borderColor: ColorsEnum.gray,
          },
        ]}
      >
        {icon && icon()}
        <TextInput
          placeholderTextColor={ColorsEnum.darkGray}
          {...props}
          style={[
            { flex: 1, marginLeft: icon ? 8 : 0 },
            disabled && { color: ColorsEnum.darkGray },
            props.style,
          ]}
        />
      </View>
      {error && <BText>{errorMessage}</BText>}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: ColorsEnum.secondary,
    width: "100%",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
  },
});
