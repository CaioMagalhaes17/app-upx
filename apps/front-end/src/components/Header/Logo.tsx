import { Logo } from "@kosky/ui";
import { NavLink } from "react-router-dom";

export function HeaderLogo() {
  return (
    <div className={`horizontal-logo flex justify-between items-center mr-2`}>
      <NavLink className="flex items-center" to="/" >
        <Logo src="/images/logo-sympla.png" className="rounded-xl h-[65px]" />
      </NavLink>
    </div>
  )
}