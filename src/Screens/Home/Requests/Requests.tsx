import { FilterButton, Filters } from "@components";
import { useAppSelector, useDonationRequests, useUser } from "@hooks";
import { ColorsEnum } from "@theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CreateRequestButton } from "../CreateRequestButton";
import { RequestCard } from "../RequestCard";

interface RequestsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Requests: FC<RequestsProps> = ({ setIsContactModalVisible }) => {

  const { bloodType } = useAppSelector(state => state.donationRequestsFilter);
  const { data: user } = useUser();
  
  const [ filtersVisibility, setFiltersVisibility ] = useState(false);

  const onToggleFilters = () => {
    setFiltersVisibility(prev => !prev);
  };

  const onContact = () => {
    setIsContactModalVisible(true);
  };

  const { data: donationRequests, fetchNextPage, isFetching, refetch } = useDonationRequests(bloodType);

  return (
    <View style={styles.container}>
      <LinearGradient colors={[
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondary,
        ColorsEnum.backgroundSecondaryTransparent,
      ]} style={styles.filterContainer}>
        <FilterButton variant="secondary" onPress={onToggleFilters} />
      </LinearGradient>
      {
        filtersVisibility ? (
          <Filters variant="secondary" setFiltersVisibility={setFiltersVisibility} />
        ) : <FlatList
          onRefresh={refetch}
          refreshing={isFetching}
          data={donationRequests?.pages.flatMap(page => page.pageDonationRequests)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <View style={{ height: 48 }} />}
          contentContainerStyle={{ padding: 16, paddingTop: 0 }}
          renderItem={({ item }) => (
            <RequestCard
              requestDonation={item}
              setIsContactModalVisible={onContact}
            />
          )}
          ListFooterComponent={() => <View style={{ height: 80 }} />}
          keyExtractor={item => "Requests_Donor_Card_" + item.id}
          onEndReached={() => fetchNextPage()}
        />
      }
      {filtersVisibility || user === null ? null : <CreateRequestButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsEnum.backgroundSecondary,
    paddingVertical: 16,
    height: "100%",
  },
  filterContainer: {
    paddingLeft: 16,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 48,
    top: 8
  },
});
