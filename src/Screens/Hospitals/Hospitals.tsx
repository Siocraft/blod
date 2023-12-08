import { BText } from "@components";
import { useThirdPartyHospitals } from "@hooks";
import { ColorsEnum } from "@theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { HospitalCard } from "./HospitalCard";
import { HospitalCardSkeleton } from "./HospitalCardSkeleton";

const skeletonArray = Array.from({ length: 3 }, (_, i) => i);

export const Hospitals: FC = () => {
  const { data: thirdPartyHospitals, isLoading: isLoadingHospitals, fetchNextPage, isFetching, refetch } = useThirdPartyHospitals();

  const { top, bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={StyleSheet.flatten([
      styles.container,
      {
        marginBottom: -bottom,
      }
    ])}>
      <LinearGradient colors={[
        ColorsEnum.whitesmoke,
        ColorsEnum.whitesmoke,
        ColorsEnum.whitesmoke,
        ColorsEnum.whiteTransparent,
      ]} style={[
        styles.titleTextContainer,
        { top }
      ]}>
        <BText
          color="black"
          bold
          style={styles.text}>
            Hospitales cerca de ti
        </BText>
      </LinearGradient>
      <View style={{ height: 56 }} />
      {
        isLoadingHospitals && skeletonArray.map((_, i) => (
          <HospitalCardSkeleton key={"Hospital_Skeleton_Card_" + i} />
        ))
      }
      <FlatList
        onRefresh={refetch}
        refreshing={isFetching}
        data={thirdPartyHospitals?.pages.flatMap(page => page.pageThirdPartyHospitals)}
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
        ListFooterComponent={() => <View style={{ height: 80 }} />}
        keyExtractor={item => "Hospital_Card_" + item.place_id}
        onEndReached={() => fetchNextPage()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTextContainer: {
  paddingHorizontal: 8,
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 1,
    height: 56,
    width: "100%",
  },
  text: {
    fontSize: 24,
    lineHeight: 40,
    backgroundColor: "transparent",
  }
});
