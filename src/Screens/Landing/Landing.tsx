import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { peopleInNeed } from "../../Data/PeopleInNeed";

export const Landing = () => {
  return (
    <FlatList
      data={peopleInNeed}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{
            uri: item.avatar,
          }} style={styles.image} />
          <View>
            <View style={styles.nameContainer}>
              <BText size="large" bold style={{ paddingRight: 8 }}>{item.name}</BText>
              <BText color="tertiary">{item.age}</BText>
            </View>
            {item.hospital && <BText>Hospital: {item.hospital}</BText>}
            <BText size="small">{item.location}</BText>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    margin: 8,
    padding: 8,
    marginBottom: 0,
    borderRadius: 8,
    backgroundColor: ColorsEnum.secondary,
    borderColor: ColorsEnum.quinary,
    borderWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  }
});