import { BText } from "@components";
import { useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { View } from "react-native";

export const OtherProfile: FC = () => {

  const route = useRoute();

  console.log(route);

  return <View>
    <BText>OtherProfile</BText>
  </View>;
}