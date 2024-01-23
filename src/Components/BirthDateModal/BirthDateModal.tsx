import { AntDesign } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { BText } from "../BText";

interface BirthDateModalProps {
  isVisible: boolean;
  onPressHideBirthDateModal: () => void;
  birthDateValue?: string;
  setFieldValue: (field: string, value: string) => void;
}

export const BirthDateModal: FC<BirthDateModalProps> = ({
  isVisible,
  onPressHideBirthDateModal,
  birthDateValue,
  setFieldValue,
}) => {
  const [ selectedDate, setSelectedDate ] = useState(
    new Date(birthDateValue ?? Date.now())
  );

  const setDate = (_event: DateTimePickerEvent, date: Date | undefined) => {
    date && setSelectedDate(date);
  };

  const confirmBirthDate = () => {
    setFieldValue("birthDate", selectedDate.toISOString());
    onPressHideBirthDateModal();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onPressHideBirthDateModal}>
      <View style={styles.container}>
        <AntDesign
          onPress={onPressHideBirthDateModal}
          style={{ alignSelf: "flex-end", marginBottom: 16 }}
          name="close"
          size={20}
          color="black"
        />
        <DateTimePicker
          display="spinner"
          value={selectedDate}
          onChange={setDate}
        />
        <Pressable onPress={confirmBirthDate} style={styles.confirmButton}>
          <BText color="white">Confirmar</BText>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsEnum.white,
    padding: 16,
    borderRadius: 8,
  },
  confirmButton: {
    backgroundColor: ColorsEnum.secondary,
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
