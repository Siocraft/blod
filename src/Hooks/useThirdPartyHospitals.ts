import { QueryKeys } from "@config";
import { ApiQueryKeys, appAxios } from "@services";
import { useInfiniteQuery } from "@tanstack/react-query";

interface GetThirdPartyHospitalsByPage {
  latitude: number;
  longitude: number;
  kilometers: number;
  pageParam?: number;
}

const getThirdPartyHospitalsByPage = async ({
  pageParam = 0,
  latitude,
  longitude,
  kilometers,
}: GetThirdPartyHospitalsByPage) => {
  try {

    if (longitude === 0 || latitude === 0) {
      return {
        pageThirdPartyHospitals: [],
        nextPage: pageParam
      };
    }

    const { data: pageThirdPartyHospitals } =
      await appAxios.get<ThirdPartyHospital[]>(
        ApiQueryKeys.ThirdPartyHospitals,
        {
          params: {
            page: pageParam,
            latitude,
            longitude,
            kilometers
          }
        }
      );

    return {
      pageThirdPartyHospitals,
      nextPage: pageThirdPartyHospitals.length < 10 ? null : pageParam + 1
    };
  } catch (error) {
    return {
      pageThirdPartyHospitals: [],
      nextPage: pageParam
    };
  }
};

export const useThirdPartyHospitals = ({
  latitude,
  longitude,
  kilometers
}: Omit<GetThirdPartyHospitalsByPage, "pageParam">) => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.THIRD_PARTY_HOSPITALS, QueryKeys.GET_ALL, latitude, longitude, kilometers],
    queryFn: ({ pageParam }) => getThirdPartyHospitalsByPage({ pageParam, latitude, longitude, kilometers }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    cacheTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });
};