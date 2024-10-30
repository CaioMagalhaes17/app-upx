import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Panel } from "@kosky/ui";
import { User } from "./User";

export function AutenticatedHeaderMenus() {
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
      <User />
    </>
  )
}