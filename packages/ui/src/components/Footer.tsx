import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const FooterStyle = cva([
  "w-full h-[40vh]",
]);

type FooterProps = ComponentProps<"footer"> & VariantProps<typeof FooterStyle>;

export function Footer({ className, children, style }: FooterProps) {
  return (
    <>
      <footer className={cn(FooterStyle({ className }))} style={style} >
        {children}
      </footer>
    </>
  )
}