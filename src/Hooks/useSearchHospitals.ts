import { QueryKeys } from "@config";
import { appAxios } from "@services";
import { useQuery } from "@tanstack/react-query";

const searchHospitalsByName = async (name: string) => {
  if (!name) return [];
  if (name.length < 3) return [];
  if (name.length > 40) return [];

  const { data } = await appAxios.get<ThirdPartyHospital[]>(`/Third-party/Hospital/by-name/${name}`);

  return data;
};

export const useSearchHospitals = (name: string) => {
  return useQuery({
    queryKey: [QueryKeys.HOSPITALS, name],
    queryFn: () => searchHospitalsByName(name),
    cacheTime: Infinity,
  });
};