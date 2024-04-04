import { QueryKeys, firebaseDatabase } from "@config";
import { useInfiniteQuery } from "@tanstack/react-query";
import { get, ref } from "firebase/database";

const getDonationRequestsByPage = async ({
  pageParam = 0,
  bloodType,
}: {
  pageParam: number;
  bloodType?: string;
}) => {

  const donationRequestsRef = ref(firebaseDatabase, '/donationRequests')

  const snapshot = await get(donationRequestsRef)

  if (!snapshot.exists()) {
    return {
      pageDonationRequests: [],
      nextPage: pageParam + 1
    };
  }

  const donationRequests: DonationRequest[] = Object.values(snapshot.val())

  const pageDonationRequests = donationRequests
    .sort((a, b) => {
      const aDate = new Date(a.createdAt).getTime();
      const bDate = new Date(b.createdAt).getTime();
      return bDate - aDate;
    })
    .slice(pageParam * 10, pageParam * 10 + 10);

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