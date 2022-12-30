import Modal from "react-native-modal";
import { BButton } from "../BButton";
import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { ColorsEnum } from "@theme";
import { View, Image } from "react-native";

interface ConfirmImageModalProps {
  isVisible: boolean;
  image: string | null;
  onPressConfirmImage: () => void;
  onCancel: () => void;
  imageSize: number;
}

export const ConfirmImageModal: FC<ConfirmImageModalProps> = ({
  isVisible,
  image,
  onPressConfirmImage,
  onCancel,
  imageSize,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancel}
      backdropColor="rgba(0, 0, 0, 0.3)"
    >
      <View
        style={{
          backgroundColor: ColorsEnum.white,
          padding: 16,
          borderRadius: 8,
        }}
      >
        <AntDesign
          onPress={onCancel}
          style={{ alignSelf: "flex-end", marginBottom: 16 }}
          name="close"
          size={20}
          color="black"
        />
        <Image
          source={{ uri: image ?? undefined }}
          style={{
            width: imageSize,
            height: imageSize,
            alignSelf: "center",
            borderRadius: imageSize / 2,
          }}
        />
        <View style={{ height: 16 }} />
        <BButton
          title="Confirmar"
          variant="secondary"
          onPress={onPressConfirmImage}
        />
      </View>
    </Modal>
  );
};
