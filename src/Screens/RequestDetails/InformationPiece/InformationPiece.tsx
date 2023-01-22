import { BText } from "@components";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { View, StyleSheet } from "react-native";

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
    <BText color="darkGray">
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