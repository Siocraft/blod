import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { BText } from "./BText";
import { Entypo } from "@expo/vector-icons";

type BDropdownProps = {
  iconLeft?: () => JSX.Element;
  iconRight?: () => JSX.Element;
  text: string;
  onPress: () => void;
  label?: string;
  error?: boolean;
  errorMessage?: string;
};

export const BDropdown: FC<BDropdownProps> = ({
  text,
  onPress,
  iconLeft,
  iconRight,
  label,
  error,
  errorMessage,
}) => {
  return (
    <>
      {label ? <BText style={{ marginBottom: 4 }} color={error ? "primary" : "black"}>{label}</BText> : null}
      <Pressable
        onPress={onPress}
        style={{
          width: "100%",
          borderRadius: 8,
          padding: 8,
          borderColor: error ? ColorsEnum.error : ColorsEnum.secondary,
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            flex: 1
          }}
        >
          {iconLeft && iconLeft()}
          <View style={{ width: 8 }} />
          <BText color="black">{text}</BText>
        </View>
        {iconRight ? (
          iconRight()
        ) : (
          <Entypo name="chevron-down" size={18} color="black" />
        )}
      </Pressable>
      {error && <BText>{errorMessage}</BText>}
    </>
  );
};
