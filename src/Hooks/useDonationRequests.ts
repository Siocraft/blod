import { QueryKeys } from "@config"
import { ApiQueryKeys, appAxios } from "@services"
import { useInfiniteQuery } from "@tanstack/react-query"

const getDonationRequestsByPage = async ({
  pageParam = 0
}: {
  pageParam: number
}) => {

  const { data: pageDonationRequests} =
    await appAxios.get<DonationRequest[]>(
      ApiQueryKeys.DonationRequests,
      {
        params: {
          page: pageParam
        }
      }
    )

  return {
    pageDonationRequests,
    nextPage: pageParam + 1
  }
}

export const useDonationRequests = () => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.DONATION_REQUESTS, QueryKeys.GET_ALL],
    queryFn: ({ pageParam }) => getDonationRequestsByPage({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })
}