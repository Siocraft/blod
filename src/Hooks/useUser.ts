import { QueryKeys } from "@config";
import { getUser } from "@services";
import { useQuery } from "@tanstack/react-query";

export const useUser = (userId?: string) => 
  useQuery([QueryKeys.USER, userId], () => getUser(userId));
  