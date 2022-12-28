import { FC, useState } from "react";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { ColorsEnum } from "@theme";
import { Data } from "@constants";
import { BText } from "@components";

interface CityModalProps {
  isVisible: boolean;
  onPressHideCityModal: () => void;
  cityValue: string;
  setFieldValue: (field: string, value: string) => void;
}

export const CityModal: FC<CityModalProps> = ({
  isVisible,
  onPressHideCityModal,
  cityValue,
  setFieldValue,
}) => {
  const [selectedCity, setSelectedCity] = useState(cityValue);

  const onPressCity = (city: string) => {
    setSelectedCity(city);
  };

  const confirmCity = () => {
    setFieldValue("city", selectedCity);
    onPressHideCityModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPressHideCityModal}
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
          onPress={onPressHideCityModal}
          style={{ alignSelf: "flex-end", marginBottom: 16 }}
          name="close"
          size={20}
          color="black"
        />
        {Data.Cities.map((city, index) => (
          <Pressable
            style={{
              padding: 8,
              marginBottom: index === Data.Cities.length - 1 ? 32 : 0,
              backgroundColor:
                selectedCity === city ? ColorsEnum.secondary : ColorsEnum.white,
              borderRadius: 8,
            }}
            onPress={() => onPressCity(city)}
            key={"City_modal_option_" + city}
          >
            <BText
              color={selectedCity === city ? "white" : "black"}
              size="large"
            >
              {city}
            </BText>
          </Pressable>
        ))}

        <Pressable
          onPress={confirmCity}
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
