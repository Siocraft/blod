import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { Pressable, View } from "react-native";
import { BText } from "./BText";
import { Entypo, Fontisto } from "@expo/vector-icons";

type BDropdownProps = {
  iconLeft?: () => JSX.Element;
  iconRight?: () => JSX.Element;
  text: string;
  onPress: () => void;
};

export const BDropdown: FC<BDropdownProps> = ({
  text,
  onPress,
  iconLeft,
  iconRight,
}) => {
  // Create isExpanded state
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
        borderRadius: 8,
        padding: 8,
        borderColor: ColorsEnum.secondary,
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
  );
};
