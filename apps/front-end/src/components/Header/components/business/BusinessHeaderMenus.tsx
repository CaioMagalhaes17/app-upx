import { Button, IconBell, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Panel } from "@kosky/ui";
import { User } from "../User";

export function BusinessHeaderMenus() {
  return (
    <>
      <div className="mr-auto" />
      <Button className="btn-primary mr-5">
        Abrir Período de qualificação
      </Button>
      <NavigationMenu className="mr-5 text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Meus períodos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Panel className="w-[300px] flex flex-col">
                <NavigationMenuLink>Períodos ativos</NavigationMenuLink>
                <NavigationMenuLink>Inscrições de especialistas</NavigationMenuLink>
                <NavigationMenuLink>Histórico de períodos</NavigationMenuLink>
              </Panel>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="mr-5 text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="py-1 px-1" showTrigger={false}><IconBell className="h-[40px] w-[30px]" /></NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <Panel className="w-[300px] flex flex-col">
                <NavigationMenuLink>Notificações lidas e não lidas</NavigationMenuLink>
              </Panel>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList >
      </NavigationMenu >
      <div className="w-[1px] h-[50px] bg-gray mr-10">
      </div>
      <User />
    </>
  )
}