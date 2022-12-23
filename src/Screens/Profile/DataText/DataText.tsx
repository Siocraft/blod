import { BText } from "@components";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export interface DataTextProps {
  label: string;
  value?: string | number;
  left?: boolean;
}

export const DataText: FC<DataTextProps> = ({ label, value, left = false }) => {
  const containerStyle = StyleSheet.flatten([
    styles.dataTextContainer,
    left && { paddingRight: 16 },
    !left && { paddingLeft: 16 },
  ]);

  return (
    <View style={containerStyle}>
      {value && (
        <>
          <BText bold color="black">
            {label}
          </BText>
          <BText color="black">{value}</BText>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dataTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    marginBottom: 8,
  },
});
