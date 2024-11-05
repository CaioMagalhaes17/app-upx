import { Header as UIHeader } from "@kosky/ui";
import { LoginButtons } from "./components/LoginButtons";
import { Location } from "./components/Location";
import { HeaderLogo } from "./components/Logo";
import { HeaderSearchBar } from "./components/SearchBar";
import { HeaderController } from "./HeaderController";

export function Header() {
  const { getHeaderMenus, isAutenticated } = HeaderController()
  return (
    <>
      <UIHeader className="h-[80px] w-full bg-black border-b border-b-gray">
        <div className="grid grid-cols-2">
          <div className="flex items-center flex-row w-full gap-5 px-5 py-2.5 ">
            <HeaderLogo />
            <HeaderSearchBar />
            <Location />
          </div>
          <div className="flex items-center flex-row px-5 py-2.5 ">
            {isAutenticated() ? getHeaderMenus() : <LoginButtons />}
          </div>
        </div>
      </UIHeader>
    </>
  )
}