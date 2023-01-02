import { CallSvg, WhatsAppSvg } from "@assets";
import { AntDesign } from "@expo/vector-icons";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { BText } from "../BText";

interface ContactModalProps {
  isVisible: boolean;
  variant: "primary" | "secondary";
  onClose: () => void;
}

const contactTitle = "Contacta al donador para recibir su apoyo";
const requestTitle = "Contacta al solicitante para poder donar";

const requestTest =
  "El solicitante deberá brindarte todos los detalles extra que requiere la donación.";
const contactText =
  "Deberás brindarle como solicitante todos los detalles extra que requiere la donación.";

export const ContactModal: FC<ContactModalProps> = ({
  isVisible,
  variant = "primary",
  onClose,
}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modal}>
        <AntDesign
          onPress={onClose}
          style={{ alignSelf: "flex-end", marginBottom: 16 }}
          name="close"
          size={20}
          color="black"
        />
        <BText color="black" bold>
          {variant === "primary" ? contactTitle : requestTitle}
        </BText>
        <View style={{ height: 16 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <WhatsAppSvg variant={variant} />
          <CallSvg variant={variant} />
        </View>
        <BText
          style={{
            marginTop: 16,
            lineHeight: 21,
            textAlign: "center",
            fontWeight: "500",
          }}
          color="darkGray"
        >
          {variant === "primary" ? contactText : requestTest}
        </BText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: ColorsEnum.white,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
