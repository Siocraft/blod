import { QueryKeys } from "@config";
import { LoadingContext } from "@context";
import { ErrorReporting, getUser } from "@services";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export const useUser = (userId?: string) => {
  const { showLoading, hideLoading } = useContext(LoadingContext);

  return useQuery({
    queryKey: [QueryKeys.USER, userId],
    queryFn: () => {
      showLoading("Cargando información del usuario");
      return getUser(userId);
    },
    onSettled: () => {
      hideLoading();
    },
    onError: e => {
      ErrorReporting(e);
      hideLoading();
    },
  });
};
