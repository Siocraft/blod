import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
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
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.age}</Text>
          <Text style={styles.text}>{item.location}</Text>
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
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
  },
});