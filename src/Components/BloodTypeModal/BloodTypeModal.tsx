import { BText } from "@components";
import { Data } from "@constants";
import { AntDesign } from "@expo/vector-icons";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

interface BloodTypeModalProps {
  isVisible: boolean;
  onPressHideBloodTypeModal: () => void;
  bloodTypeValue: string;
  setFieldValue: (field: string, value: string) => void;
  cb?: () => void;
}

export const BloodTypeModal: FC<BloodTypeModalProps> = ({
  isVisible,
  onPressHideBloodTypeModal,
  bloodTypeValue,
  setFieldValue,
  cb,
}) => {
  const [selectedBloodType, setSelectedBloodType] = useState(bloodTypeValue);

  const onPressBloodType = (bloodType: string) => {
    setSelectedBloodType(bloodType);
  };

  const confirmBloodType = () => {
    setFieldValue("bloodType", selectedBloodType);
    cb?.();
    onPressHideBloodTypeModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPressHideBloodTypeModal}
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
          onPress={onPressHideBloodTypeModal}
          style={{ alignSelf: "flex-end", marginBottom: 16 }}
          name="close"
          size={20}
          color="black"
        />
        {Data.BloodTypes.map((bloodType, index) => (
          <Pressable
            style={{
              padding: 8,
              marginBottom: index === Data.BloodTypes.length - 1 ? 32 : 0,
              backgroundColor:
                selectedBloodType === bloodType
                  ? ColorsEnum.secondary
                  : ColorsEnum.white,
              borderRadius: 8,
            }}
            onPress={() => onPressBloodType(bloodType)}
            key={"Bloodtype_modal_option_" + bloodType}
          >
            <BText
              color={selectedBloodType === bloodType ? "white" : "black"}
              size="large"
            >
              {bloodType}
            </BText>
          </Pressable>
        ))}

        <Pressable
          onPress={confirmBloodType}
          style={{
            width: "100%",
            backgroundColor: ColorsEnum.secondary,
            borderRadius: 8,
            padding: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BText color="white">Confirmar</BText>
        </Pressable>
      </View>
    </Modal>
  );
};
