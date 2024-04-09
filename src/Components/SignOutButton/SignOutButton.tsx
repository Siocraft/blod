import { useSignOut } from "@hooks";
import { useFirebaseUser } from "@services";
import React, { FC } from "react";
import { BButton, BButtonProps } from "../BButton";

type SignOutButtonProps = Omit<BButtonProps, "title">

export const SignOutButton: FC<SignOutButtonProps> = ({
  ...buttonProps
}) => {

  const { user } = useFirebaseUser();
  const { signOutFromApp } = useSignOut();

  return user ? (
    <BButton
      onPress={signOutFromApp}
      {...buttonProps}
      title="Cerrar sesión"
    />
  ) : null;
};