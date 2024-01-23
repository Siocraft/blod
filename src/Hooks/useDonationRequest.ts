import { QueryKeys } from "@config";
import { ApiQueryKeys, appAxios } from "@services";
import { useQuery } from "@tanstack/react-query";

const getDonationRequest = async (id: string) => {
  const { data } = await appAxios.get<DonationRequest>(ApiQueryKeys.GetDonationRequest(id), {
    params: {
      id,
    }
  });

  return data;
};

export const useDonationRequest = (id: string) => {
  return useQuery({
    queryKey: [ QueryKeys.DONATION_REQUESTS, id ],
    queryFn: () => getDonationRequest(id),
  });
};