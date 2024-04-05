import { QueryKeys } from "@config";
import { ErrorReporting, getUser } from "@services";
import { useQuery } from "@tanstack/react-query";

export const useUser = (userId?: string) => {
  return useQuery({
    queryKey: [ QueryKeys.USER, userId ],
    queryFn: () => getUser(userId),
    onError: e => {
      ErrorReporting(e);
    },
  });
};
