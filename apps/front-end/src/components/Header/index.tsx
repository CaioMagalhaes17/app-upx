import { Header as UIHeader } from "@kosky/ui";
import { LoginButtons } from "./components/LoginButtons";
import { Location } from "./components/Location";
import { HeaderLogo } from "./components/Logo";
import { HeaderSearchBar } from "./components/SearchBar";
import { AutenticatedHeaderMenus } from "./components/AutenticatedHeaderMenus";

export function Header() {
  const autenticated = false
  return (
    <>
      <UIHeader className="h-[80px] w-full bg-black border-b border-b-[#323b45]">
        <div className="grid grid-cols-2">
          <div className="flex items-center flex-row w-full gap-5 px-5 py-2.5 ">
            <HeaderLogo />
            <HeaderSearchBar />
            <Location />
          </div>
          <div className="flex items-center flex-row px-5 py-2.5 ">
            {autenticated ? <AutenticatedHeaderMenus /> : <LoginButtons />}
          </div>
        </div>
      </UIHeader>
    </>
  )
}