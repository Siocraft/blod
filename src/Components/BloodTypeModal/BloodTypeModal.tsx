import { Data } from "@constants";
import { AntDesign } from "@expo/vector-icons";
import { ColorsEnum } from "@theme";
import { isBloodType } from "@utils";
import React, { FC, useState } from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";
import { BButton } from "../BButton";
import { BText } from "../BText";

interface BloodTypeModalProps {
  isVisible: boolean;
  onPressHideBloodTypeModal: () => void;
  bloodTypeValue: BloodType[] | BloodType | "Tipo de sangre";
  setFieldValue: (field: string, value: BloodTypesArray | BloodType) => void;
  cb?: () => void;
  chooseMultipleBloodTypes?: boolean;
}

export const BloodTypeModal: FC<BloodTypeModalProps> = ({
  isVisible,
  onPressHideBloodTypeModal,
  bloodTypeValue,
  setFieldValue,
  cb,
  chooseMultipleBloodTypes = false,
}) => {
  const [selectedBloodType, setSelectedBloodType] = useState<BloodTypesArray | BloodType | "Tipo de sangre">(bloodTypeValue);

  const onPressBloodType = (bloodType: BloodType) => {
    if (!chooseMultipleBloodTypes) {
      setSelectedBloodType(bloodType);
    } else if (Array.isArray(selectedBloodType) && selectedBloodType.includes(bloodType)) {
      setSelectedBloodType(selectedBloodType.filter((bt) => bt !== bloodType));
    } else if (Array.isArray(selectedBloodType)) {
      setSelectedBloodType([...selectedBloodType, bloodType]);
    }
  };

  const confirmBloodType = () => {
    isBloodType(selectedBloodType) && setFieldValue("bloodType", selectedBloodType);
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
              marginBottom: index === Data.BloodTypes.length - 1 ? 32 : 8,
              backgroundColor:
                (selectedBloodType === bloodType || (Array.isArray(selectedBloodType) && selectedBloodType.includes(bloodType)))
                  ? ColorsEnum.secondary
                  : ColorsEnum.white,
              borderRadius: 8,
            }}
            onPress={() => onPressBloodType(bloodType)}
            key={"Bloodtype_modal_option_" + bloodType}
          >
            <BText
              color={selectedBloodType === bloodType || (Array.isArray(selectedBloodType) && selectedBloodType.includes(bloodType)) ? "white" : "black"}
              size="large"
            >
              {bloodType}
            </BText>
          </Pressable>
        ))}
        <BButton
          title="Confirmar"
          onPress={confirmBloodType}
          variant="secondary"
        />
      </View>
    </Modal>
  );
};
