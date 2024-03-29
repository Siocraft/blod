import { queryClient, QueryKeys } from "@config";
import { updateUser } from "@services";
import { useMutation } from "@tanstack/react-query";

type updateUserMutationParams = {
  id: string;
  data: Record<string, unknown>;
};

export const useUpdateUser = (uid: string) => {

  const { mutateAsync } = useMutation(
    async ({ id, data }: updateUserMutationParams) => {
      return await updateUser(id, data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries([ QueryKeys.USER, uid ]);
      },
    }
  );
  return mutateAsync;
};
