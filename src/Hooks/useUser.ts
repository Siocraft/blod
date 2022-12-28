import { QueryKeys } from "@config";
import { LoadingContext } from "@context";
import { getUser } from "@services";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export const useUser = (userId?: string) => {

  const { showLoading, hideLoading } = useContext(LoadingContext)

  return useQuery({
    queryKey: [QueryKeys.USER, userId],
    queryFn: () => {
      showLoading("Cargado información del usuario")
      return getUser(userId)
    },
    onSettled: (data) => {
      console.log("User data", data);
      hideLoading();
    }
  });
};
