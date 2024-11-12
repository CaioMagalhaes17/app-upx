import { IconBell, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Panel } from "@kosky/ui";
import { User } from "../User";

export function SpecialistHeaderMenus() {
  return (
    <>
      <div className="mr-auto" />
      <NavigationMenu className="mr-5 text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Períodos de qualificação</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Panel className="w-[300px] flex flex-col">
                <NavigationMenuLink>Procurar</NavigationMenuLink>
                <NavigationMenuLink>Meus períodos ativos</NavigationMenuLink>
                <NavigationMenuLink>Minhas inscrições</NavigationMenuLink>
              </Panel>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="mr-5 text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Meu grupo</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Panel className="w-[300px] flex flex-col">
                <NavigationMenuLink>Períodos ativos</NavigationMenuLink>
                <NavigationMenuLink>Inscrições de especialistas</NavigationMenuLink>
                <NavigationMenuLink>Histórico de períodos</NavigationMenuLink>
              </Panel>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu >
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
      <button className="mr-5">
      </button>
      <div className="w-[1px] h-[50px] bg-gray mr-10">
      </div>
      <User />
    </>
  )
}