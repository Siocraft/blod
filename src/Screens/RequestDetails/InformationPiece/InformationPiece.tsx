import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

interface InformationPieceProps {
  title: string;
  value: string;
}

export const InformationPiece: FC<InformationPieceProps> = ({
  title,
  value,
}) => {
  return <View style={styles.container}>
    <BText color="secondary" bold>
      {title}
    </BText>
    <BText numberOfLines={1} style={{ maxWidth: "70%"}} color="darkGray">
      {value}
    </BText>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderColor: ColorsEnum.backgroundSecondary
  },
});