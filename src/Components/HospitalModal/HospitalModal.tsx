import { AntDesign } from "@expo/vector-icons";
import { useHospitals } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";
import { BButton } from "../BButton";
import { BText } from "../BText";

interface HospitalModalProps {
  isVisible: boolean;
  onPressHideHospitalModal: () => void;
  hospitalValue: string;
  setFieldValue: (field: string, value: string) => void;
  cb?: (selectedHospital: string) => void;
}

export const HospitalModal: FC<HospitalModalProps> = ({
  isVisible,
  onPressHideHospitalModal,
  hospitalValue,
  setFieldValue,
  cb,
}) => {
  const [ selectedHospital, setSelectedHospital ] = useState(hospitalValue);

  const onPressHospital = (hospital: string) => {
    setSelectedHospital(hospital);
  };

  const confirmHospital = () => {
    setFieldValue("hospital", selectedHospital);
    cb?.(selectedHospital);
    onPressHideHospitalModal();
  };

  const { data: hospitals, isLoading: isLoadingHospitals } = useHospitals();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPressHideHospitalModal}
      backdropColor="rgba(0, 0, 0, 0.3)"
    >
      <View
        style={{
          backgroundColor: ColorsEnum.white,
          padding: 16,
          borderRadius: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <BText color="black" bold>Elige un hospital</BText>
          <AntDesign
            onPress={onPressHideHospitalModal}
            style={{ alignSelf: "flex-end", marginBottom: 16 }}
            name="close"
            size={20}
            color="black"
          />
        </View>
        {/* {false && Data.Hospitals.map((hospital, index) => (
          <Pressable
            style={{
              padding: 8,
              marginBottom: index === Data.Hospitals.length - 1 ? 32 : 0,
              backgroundColor:
                selectedHospital === hospital
                  ? ColorsEnum.secondary
                  : ColorsEnum.white,
              borderRadius: 8,
            }}
            onPress={() => onPressHospital(hospital)}
            key={"Bloodtype_modal_option_" + hospital}
          >
            <BText
              color={selectedHospital === hospital ? "white" : "black"}
              size="large"
            >
              {hospital}
            </BText>
          </Pressable>
        ))} */}
        {
          isLoadingHospitals ? null : (
            hospitals?.map((hospital, index) => (
              <Pressable
                style={{
                  padding: 8,
                  marginBottom: index === hospitals.length - 1 ? 32 : 8,
                  backgroundColor:
                    selectedHospital === hospital.name
                      ? ColorsEnum.secondary
                      : ColorsEnum.white,
                  borderRadius: 8,
                }}
                onPress={() => onPressHospital(hospital.name)}
                key={"Bloodtype_modal_option_" + hospital.name}
              >
                <BText
                  color={selectedHospital === hospital.name ? "white" : "black"}
                  size="large"
                >
                  {hospital.name}
                </BText>
              </Pressable>
            ))
          )
        }
        <BButton
          title="Confirmar"
          onPress={confirmHospital}
          variant="secondary"
        />
      </View>
    </Modal>
  );
};
