import { QueryKeys } from "@config";
import { ApiQueryKeys, appAxios } from "@services";
import { useInfiniteQuery } from "@tanstack/react-query";

const getDonorsByPage = async ({
  pageParam = 0,
  bloodType,
}: {
  pageParam: number;
  bloodType?: string;
}) => {

  const { data: pageDonors } =
    await appAxios.get<Donor[]>(
      ApiQueryKeys.Donors,
      {
        params: {
          page: pageParam,
          bloodType,
        }
      }
    );

  return {
    pageDonors,
    nextPage: pageParam + 1
  };
};

export const useDonors = (bloodType?: string) => {
  return useInfiniteQuery({
    queryKey: [ QueryKeys.DONORS, QueryKeys.GET_ALL, bloodType ],
    queryFn: ({ pageParam }) => getDonorsByPage({ pageParam, bloodType }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};