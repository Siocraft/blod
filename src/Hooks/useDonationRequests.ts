import { QueryKeys } from "@config";
import { ApiQueryKeys, appAxios } from "@services";
import { useInfiniteQuery } from "@tanstack/react-query";

const getDonationRequestsByPage = async ({
  pageParam = 0,
  bloodType,
}: {
  pageParam: number;
  bloodType?: string;
}) => {

  const { data: pageDonationRequests } =
    await appAxios.get<DonationRequest[]>(
      ApiQueryKeys.DonationRequests,
      {
        params: {
          page: pageParam,
          bloodType,
        }
      }
    );

  return {
    pageDonationRequests,
    nextPage: pageParam + 1
  };
};

export const useDonationRequests = (bloodType?: string) => {
  return useInfiniteQuery({
    queryKey: [ QueryKeys.DONATION_REQUESTS, QueryKeys.GET_ALL, bloodType ],
    queryFn: ({ pageParam }) => getDonationRequestsByPage({ pageParam, bloodType }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};