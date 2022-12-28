import { queryClient, QueryKeys } from "@config";
import { updateUser } from "@services";
import { useMutation } from "@tanstack/react-query";
import { LoadingContext } from "@context";
import { useContext } from "react";

type updateUserMutationParams ={
  id: string;
  data: any;
}

export const useUpdateUser = (uid: string) => {

  const { showLoading, hideLoading } = useContext(LoadingContext);

  const { mutateAsync } = useMutation(
    async ({
      id,
      data
    }: updateUserMutationParams
    ) => {
      showLoading("Lol")
      return await updateUser(id, data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries([QueryKeys.USER, uid])
        hideLoading();
      },
    }
);
  return mutateAsync;
}
