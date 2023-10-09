import { QueryKeys } from "@config";
import { ApiQueryKeys, appAxios } from "@services";
import { useInfiniteQuery } from "@tanstack/react-query";

const getThirdPartyHospitalsByPage = async ({
  pageParam = 0
}: {
  pageParam: number
}) => {

  const { data: pageThirdPartyHospitals} =
    await appAxios.get<ThirdPartyHospital[]>(
      ApiQueryKeys.ThirdPartyHospitals,
      {
        params: {
          page: pageParam
        }
      }
    );

  return {
    pageThirdPartyHospitals,
    nextPage: pageParam + 1
  };
};

export const useThirdPartyHospitals = () => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.THIRD_PARTY_HOSPITALS, QueryKeys.GET_ALL],
    queryFn: ({ pageParam }) => getThirdPartyHospitalsByPage({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};