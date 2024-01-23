import { QueryKeys, queryClient } from "@config";
import { LoadingContext } from "@context";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@hooks";
import { ErrorReporting, updateUser, uploadImageAsync } from "@services";
import { ColorsEnum } from "@theme";
import {
  ImageInfo,
  ImagePickerCancelledResult,
  MediaTypeOptions,
  launchImageLibraryAsync,
} from "expo-image-picker";
import React, { FC, useContext, useState } from "react";
import {
  Image,
  ImagePickerResult,
  Pressable,
  StyleSheet
} from "react-native";
import { ConfirmImageModal } from "./ConfirmImageModal";
import { SeeFullImageModal } from "./SeeFullImageModal";

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
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const [ image, setImage ] = useState<string | null>(null);
  const [ imageFullScreen, setImageFullScreen ] = useState(false);
  const { user: authUser } = useAuth();

  const imageContainerStyle = StyleSheet.flatten([
    styles.imageContainer,
    {
      width: size + borderRadius,
      height: size + borderRadius,
      borderRadius: (size + borderRadius) / 2,
    },
  ]);

  const onEditImage = () => {
    showLoading("Abriendo galería");
    launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [ 4, 3 ],
      quality: 1,
    })
      .then(async pickedImage => {
        await handleImagePicked(pickedImage);
      })
      .catch(ErrorReporting)
      .finally(hideLoading);
  };

  const handleImagePicked = async (
    pickerResult:
      | ImageInfo
      | (ImagePickerResult & { cancelled: boolean })
      | ImagePickerCancelledResult
  ) => {
    try {
      showLoading("Subiendo imagen");

      if (pickerResult.cancelled === false) {
        const uploadUrl = await uploadImageAsync(
          pickerResult.uri,
          authUser?.uid
        );
        setImage(uploadUrl);
      }
    } catch (e) {
      ErrorReporting(e);
    } finally {
      hideLoading();
    }
  };

  const onCancelEditImage = () => {
    setImage(null);
  };

  const onSeeImageFullScreen = () => {
    setImageFullScreen(true);
  };

  const onCancelSeeImageFullScreen = () => {
    setImageFullScreen(false);
  };

  const onPressConfirmImage = async () => {
    showLoading("Actualizando imagen");
    await updateUser(authUser?.uid, {
      avatar: image,
    });
    queryClient.invalidateQueries([ QueryKeys.USER, authUser?.uid ]);
    setImage(null);
    hideLoading();
  };

  return (
    <Pressable onPress={onSeeImageFullScreen} style={imageContainerStyle}>
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
      {editable && (
        <Pressable onPress={onEditImage} style={styles.cameraContainer}>
          <MaterialIcons name="camera-alt" size={32} color="white" />
        </Pressable>
      )}
      <SeeFullImageModal
        image={avatar}
        isVisible={imageFullScreen}
        onClose={onCancelSeeImageFullScreen}
      />
      <ConfirmImageModal
        isVisible={image !== null}
        image={image}
        onPressConfirmImage={onPressConfirmImage}
        onCancel={onCancelEditImage}
        imageSize={size}
      />
    </Pressable>
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
  },
});
