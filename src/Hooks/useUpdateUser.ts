import { queryClient, QueryKeys } from "@config";
import { LoadingContext } from "@context";
import { updateUser } from "@services";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

type updateUserMutationParams = {
  id: string;
  data: Record<string, unknown>;
};

export const useUpdateUser = (uid: string) => {
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const { mutateAsync } = useMutation(
    async ({ id, data }: updateUserMutationParams) => {
      showLoading("Actualizando usuario");
      return await updateUser(id, data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries([ QueryKeys.USER, uid ]);
        hideLoading();
      },
    }
  );
  return mutateAsync;
};
