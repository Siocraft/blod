import { QueryKeys } from "@config"
import { appAxios } from "@services"
import { useQuery } from "@tanstack/react-query"

export interface HospitalFromAPI {
  address: string
  city: string
  coordinates: string
  description: string
  email: string
  id: string
  name: string
  phone: string
  zipCode: string
}

const getHospitals = async () => {
  const { data: hospitals } = await appAxios.get<HospitalFromAPI[]>("/Hospital")
  return hospitals
}

export const useHospitals = () => {
  return useQuery({
    queryKey: [QueryKeys.HOSPITALS],
    queryFn: getHospitals,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  })
}