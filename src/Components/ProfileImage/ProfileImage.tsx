import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

export interface ProfileImageProps {
  avatar: string;
  size?: number;
  borderRadius?: number;
}

export const ProfileImage: FC<ProfileImageProps> = ({
  avatar,
  size = 200,
  borderRadius = 8,
}) => {
  const imageContainerStyle = StyleSheet.flatten([
    styles.imageContainer,
    {
      width: size + borderRadius,
      height: size + borderRadius,
      borderRadius: (size + borderRadius) / 2,
    },
  ]);

  return (
    <View style={imageContainerStyle}>
      <Image
        source={{
          uri: avatar,
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: ColorsEnum.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
});
