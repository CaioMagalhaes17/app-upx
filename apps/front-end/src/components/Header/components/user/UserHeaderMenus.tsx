import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Panel } from "@kosky/ui";
import { User } from "../User";

export function UserHeaderMenus() {
  return (
    <>
      <div className="mr-auto" />
      <NavigationMenu className="mr-5 text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Inserir código de ingresso</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Panel className="w-[300px]">
                <NavigationMenuLink></NavigationMenuLink>
              </Panel>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Minha empresa</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Panel className="w-[300px]">
                <NavigationMenuLink>Link</NavigationMenuLink>
              </Panel>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-[1px] h-[50px] bg-gray mr-10">
      </div>
      <User />
    </>
  )
}