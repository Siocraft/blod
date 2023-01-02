import { ColorsEnum } from "@theme";
import { FC } from "react";
import { FlatList } from "react-native";
import { donationRequests } from "../../../Data/DonationRequests";
import { CreateRequestButton } from "../CreateRequestButton";
import { DonationRequestCard } from "../DonationRequestCard";

interface RequestsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Requests: FC<RequestsProps> = ({ setIsContactModalVisible }) => {
  return (
    <>
      <FlatList
        data={donationRequests}
        style={{ backgroundColor: ColorsEnum.backgroundSecondary }}
        renderItem={({ item }) => (
          <DonationRequestCard
            requestDonation={item}
            setIsContactModalVisible={setIsContactModalVisible}
          />
        )}
        keyExtractor={item => item.id}
      />
      <CreateRequestButton />
    </>
  );
};
