import { QueryKeys } from "@config";
import { ApiQueryKeys, appAxios } from "@services";
import { useQuery } from "@tanstack/react-query";
import { HospitalFromAPI } from "./useHospitals";

const getHospital = async (id: string) => {
  if (id === "") return null;
  const { data: hospital } = await appAxios.get<HospitalFromAPI>(ApiQueryKeys.GetHospital(id));
  return hospital;
};

export const useHospital = (id: string) => {
  return useQuery({
    queryKey: [ QueryKeys.HOSPITAL, id ],
    queryFn: () => getHospital(id),
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
};