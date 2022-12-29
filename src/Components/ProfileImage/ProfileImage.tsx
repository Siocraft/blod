import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export interface ProfileImageProps {
  avatar: string;
  size?: number;
  borderRadius?: number;
  editable?: boolean;
}

export const ProfileImage: FC<ProfileImageProps> = ({
  avatar,
  size = 200,
  borderRadius = 8,
  editable = false,
}) => {
  const imageContainerStyle = StyleSheet.flatten([
    styles.imageContainer,
    {
      width: size + borderRadius,
      height: size + borderRadius,
      borderRadius: (size + borderRadius) / 2,
    },
  ]);

  const onEditImage = () => {
    console.log("Edit Image");
  };

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
      <Pressable onPress={onEditImage} style={styles.cameraContainer}>
        <MaterialIcons name="camera-alt" size={32} color="white" />
      </Pressable>
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
  cameraContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: ColorsEnum.secondary,
    borderRadius: 100,
    padding: 8,
  }
});
