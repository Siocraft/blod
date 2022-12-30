import { FC } from "react";
import ImageView from "react-native-image-viewing";

export interface SeeFullImageModalProps {
  image: string;
  isVisible: boolean;
  onClose: () => void;
}

export const SeeFullImageModal: FC<SeeFullImageModalProps> = ({
  image,
  isVisible,
  onClose,
}) => {
  return (
    <ImageView
      images={[
        {
          uri: image,
        },
      ]}
      imageIndex={0}
      visible={isVisible}
      onRequestClose={onClose}
    />
  );
};
