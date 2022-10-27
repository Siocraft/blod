import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { BText } from "./BText";

interface BTextInputProps extends TextInputProps {
  icon?: boolean;
}

export const BTextInput: FC<BTextInputProps> = ({
  icon = false,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      {icon && <BText>Icon</BText>}
      <TextInput
        placeholderTextColor={ColorsEnum.darkGray}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: ColorsEnum.secondary,
    width: '100%',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
  }
})