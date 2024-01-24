import { BBloodType, BText, FloatingInformation, GoBack } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC, useMemo } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Row, Rows, Table } from "react-native-table-component";

const tableHead = [ "Grupo", "Puede donar a", "Puede recibir" ];
const tableData = [
  [
    "A+",
    "A+, AB+",
    "A+, A-, O+, O-"
  ],
  [
    "A-",
    "A+, A-, AB+, AB-",
    "A-, O-"
  ],
  [
    "B+",
    "B+, AB+",
    "B+, B-, O+, O-"
  ],
  [
    "B-",
    "B+, B-, AB+, AB-",
    "B-, O-"
  ],
  [
    "AB+",
    "AB+",
    "Todos"
  ],
  [
    "AB-",
    "AB+, AB-",
    "AB-, A-, B-, O-"
  ],
  [
    "O+",
    "A+, B+, AB+, O+",
    "O+, O-"
  ],
  [
    "O-",
    "Todos",
    "O-"
  ],
];

export const BloodGroupCompatibility: FC = () => {

  const tableDateToRender = useMemo(() => tableData.map((row, index) => {
    const group = <BBloodType style={styles.rowStyle} variant="secondary" key={index} bloodType={row[0] as BloodType} />;
    const donateTo = <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {row[1].split(",").map((bloodType, index) => {
        return <BBloodType style={styles.rowStyle} variant="primary" key={index} bloodType={bloodType as BloodType} />;
      })}
    </View>;
    const receiveFrom = <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {row[2].split(",").map((bloodType, index) => {
        return <BBloodType style={styles.rowStyle} variant="primary" key={index} bloodType={bloodType as BloodType} />;
      })}
    </View>;

    return [
      group,
      donateTo,
      receiveFrom
    ];
  }), []);

  return <SafeAreaView style={styles.safeAreaView}>
    <GoBack/>
    <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
    </View>
    <ScrollView style={styles.scrollContainer}>
      <BText
        size="title"
        bold
        color="black"
        style={styles.titleText}
      >
      Compatibilidad entre grupos sanguíneos
      </BText>

      <Table borderStyle={styles.borderStyle}>
        <Row flexArr={[
          1, 2, 2
        ]} data={tableHead} style={styles.head} textStyle={styles.headText}/>
        <Rows flexArr={[
          1, 2, 2
        ]} data={tableDateToRender} />
      </Table>

      <View style={styles.bottomWhiteSpace} />
    </ScrollView>
    <FloatingInformation
      link="http://transfusion.granada-almeria.org/donar/grupos-sanguineos"
      text="Consulta más información en"
    />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: ColorsEnum.white,
    flex: 1
  },
  scrollContainer: {
    padding: 16,
    paddingTop: 0
  },
  infoContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    textAlign: "center",
  },
  bottomWhiteSpace: {
    height: 120,
  },
  titleText: {
    marginBottom: 16
  },
  head: { 
    height: 40,
    backgroundColor: ColorsEnum.backgroundSecondary
  },
  headText: {
    margin: 6,
    color: ColorsEnum.secondary,
    fontWeight: "bold"
  },
  rowStyle: {
    margin: 6
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: ColorsEnum.secondary
  }
});