import { ABPositiveSvg, LocationSvg } from "@assets";
import { BButton, BText } from "@components";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { donorCards } from "../../../Data/Donors";

interface DonorsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Donors: FC<DonorsProps> = ({
  setIsContactModalVisible,
}) => {

  const onContact = () => {
    setIsContactModalVisible(true);
  }

  return <>
    <FlatList
        data={donorCards}
        style={{ backgroundColor: ColorsEnum.backgroundPrimary, padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.donorCard}>
            <View style={styles.header}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.headerText}>
                <BText size="title" color="black" bold>{item.name}</BText>
                <View style={styles.locationContainer}>
                  <LocationSvg />
                  <View style={{ width: 4 }} />
                  <BText size="large" color="black">{item.city}</BText>
                </View>
                  {
                    item.isAvailableToDonate && (
                      <>
                        <View style={{ height: 8 }} />
                        <View style={styles.badge}>
                          <BText size="small" color="black">Donador</BText>
                        </View>
                      </>
                    )
                  }
                  <View style={{ flex: 1}} />
              </View>
              <View style={{ flex: 1 }} />
              <ABPositiveSvg />
            </View>
            <View style={{ height: 16 }} />
            <BText color="black">
              {item.description}
            </BText>
            <View style={{ height: 16 }} />
            <View style={styles.buttonHub}>
              <View style={styles.button}>
                <BButton title="Ver más" variant="primary-void" />
              </View>
              <View style={{ width: 16 }} />
              <View style={styles.button}>
                <BButton title="Contactar" onPress={onContact} />
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsEnum.backgroundPrimary,
  },
  donorCard: {
    backgroundColor: ColorsEnum.white,
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
  },
  avatar: { height: 64, width: 64, borderRadius: 8 },
  header: {
    flexDirection: "row",
  },
  headerText: {
    marginLeft: 16,
    alignItems: "flex-start",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonHub: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  badge: {
    backgroundColor: ColorsEnum.success,
    paddingHorizontal: 8,
    borderRadius: 8,
  }
})