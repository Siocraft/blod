import { HospitalSvg } from "@assets";
import { BText, BTextInput } from "@components";
import { useSearchHospitals, useThirdPartyHospitals, useUserLocation } from "@hooks";
import React, { FC, useMemo, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { HospitalCard } from "./HospitalCard";
import { HospitalCardSkeleton } from "./HospitalCardSkeleton";

const skeletonArray = Array.from({ length: 6 }, (_, i) => i);

export const Hospitals: FC = () => {

  const { latitude, longitude } = useUserLocation();
  const [ kilometers, setKilometers ] = useState<string>("10");
  const { bottom } = useSafeAreaInsets();

  const {
    data: thirdPartyHospitals,
    isLoading: isLoadingHospitals,
    fetchNextPage,
    isFetching,
    refetch,
    hasNextPage,
  } = useThirdPartyHospitals({
    latitude,
    longitude,
    kilometers: parseInt(kilometers),
  });

  const [ searchString, setSearchString ] = useState<string>("");

  const flatListData = useMemo(() => {
    const allHospitals = thirdPartyHospitals?.pages.flatMap(page => page.pageThirdPartyHospitals) ?? [];
    const filteredHospitals = searchString.length < 3 ? allHospitals : allHospitals.filter(hospital => hospital.name.toLowerCase().includes(searchString.toLowerCase()));
    const sortedHospitals = filteredHospitals.sort((a, b) => {
      const aDistance = Math.sqrt(Math.pow(a.geometry.location.lat - latitude, 2) + Math.pow(a.geometry.location.lng - longitude, 2));
      const bDistance = Math.sqrt(Math.pow(b.geometry.location.lat - latitude, 2) + Math.pow(b.geometry.location.lng - longitude, 2));
      return aDistance - bDistance;
    });
    return sortedHospitals;
  }, [ searchString, thirdPartyHospitals ]);

  const { data: searchedHospitals } = useSearchHospitals(searchString);

  const noHospitalsFound = searchedHospitals?.length === 0 && searchString.length >= 3;
  const noHospitalsInRange = flatListData.length === 0 && searchString.length < 3;

  return (
    <SafeAreaView>
      <BText
        color="black"
        bold
        style={styles.titleText}>
          Hospitales cerca de ti
      </BText>
      <View style={styles.inputContainer}>
        <BTextInput
          disabled={isLoadingHospitals}
          variant="primary"
          placeholder="Buscar hospital por nombre"
          icon={() => <HospitalSvg />}
          onChangeText={setSearchString}
          value={searchString}
          autoCorrect={false}
          autoComplete="off"
          onClear={() => setSearchString("")}
        />
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
          <BText color="black">Buscar hospitales a menos de </BText>
          <BTextInput
            disabled={isLoadingHospitals}
            variant="primary"
            value={kilometers}
            containerStyle={{ width: 50 }}
            style={{ textAlign: "center" }}
            onChangeText={setKilometers}
            keyboardType="number-pad"
          />
          <BText color="black"> km</BText>
        </View>
      </View>
      {
        isLoadingHospitals && <ScrollView>
          {
            skeletonArray.map((_, i) => (
              <HospitalCardSkeleton key={"Hospital_Skeleton_Card_" + i} />
            ))
          }
        </ScrollView>
      }
      {
        noHospitalsFound && (
          <View style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <BText color="primary" bold>No se encontraron hospitales</BText>
          </View>
        )
      }
      {!noHospitalsFound && flatListData.length > 0 ? <FlatList
        maxToRenderPerBatch={10}
        onRefresh={refetch}
        refreshing={isFetching}
        data={searchString.length > 2 ? searchedHospitals : flatListData}
        showsVerticalScrollIndicator={true}
        // ListHeaderComponent={() => <View style={{ height: 40 }} />}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item: hospital }) => {

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_street, _neighborhood, zipAndCity, _state ] = hospital.formatted_address.split(", ");
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [ _zipCode, city ] = zipAndCity.split(" ");
          return (
            <HospitalCard
              key={hospital.place_id}
              address={hospital.formatted_address}
              name={hospital.name}
              city={city}
              coordinates={hospital.geometry.location.lat + "," + hospital.geometry.location.lng}
            />
          );
        }}
        ListFooterComponent={() => <View style={{ height: bottom + 100 }} />}
        keyExtractor={(item, index) => "Hospital_Card_" + item.place_id + "_" + index}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.5}
      /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    lineHeight: 32,
    marginHorizontal: 16,
    marginBottom: 16
  },
  inputContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  }
});
