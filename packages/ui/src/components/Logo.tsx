import { ComponentProps } from "react";

export function Logo({ ...props }: ComponentProps<"img">) {
  return (
    <img
      alt="logo"
      src="http://localhost:5173/images/logo-sympla.png"
      {...props}
    />
  );
}