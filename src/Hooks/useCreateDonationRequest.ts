import { QueryKeys } from "@config";
import { ApiQueryKeys, appAxios } from "@services";
import { useMutation } from "@tanstack/react-query";
import { useAppNavigation } from "./useAppNavigation";

interface CreateDonationRequestParams {
  lastName: string,
  firstName: string,
  age: number,
  bloodType: `${BloodTypes}`,
  city: string,
  hospital: string,
  contact: string,
  litersDonated: number,
  avatar: string,
  description: string
}

const createDonationRequest = async (donationRequest: CreateDonationRequestParams) => {
  const { data } = await appAxios.post<DonationRequest>(ApiQueryKeys.DonationRequest, {
    ...donationRequest,
  });

  return data;
};

export const useCreateDonationRequest = () => {

  const { navigateToRequestDetails } = useAppNavigation();

  return useMutation({
    mutationKey: [QueryKeys.DONATION_REQUESTS, QueryKeys.CREATE],
    mutationFn: createDonationRequest,
    onSuccess: (data) => {
      console.log(data.id);
      navigateToRequestDetails(data.id);
    }
  });
};