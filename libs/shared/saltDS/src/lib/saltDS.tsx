import { Button, ButtonProps, SaltProviderNext as SProvider, SaltProviderNextProps } from "@salt-ds/core";
import { FC } from "react";
import { withSaltDS } from "./AppSaltProvider";

export const SaltProvider: FC<SaltProviderNextProps> = ({
  children,
  ...rest
}) => {
  return (
    <SProvider {...rest}>
      {children}
    </SProvider>
  );
};

export const SaltButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return withSaltDS(
    <Button {...rest}>
      {children}
    </Button>
  );
};