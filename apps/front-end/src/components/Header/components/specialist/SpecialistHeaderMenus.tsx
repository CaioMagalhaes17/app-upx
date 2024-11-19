import { Button, IconBell, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Panel } from "@kosky/ui";
import { User } from "../User";
import { useNavigate } from "react-router-dom";

export function SpecialistHeaderMenus() {
  const navigate = useNavigate()
  return (
    <>
      <div className="mr-auto" />
      <Button onClick={() => navigate('/periods/list')} className="btn-primary mr-2 "> Procurar períodos de qualificação</Button>
      <NavigationMenu className="mr-2 text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Meu grupo</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Panel className="w-[300px] flex flex-col">
                <button className="text-left" onClick={() => navigate('/profile/group')}>Perfil do grupo</button>
              </Panel>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu >
      <NavigationMenu className="mr-2 text-white">
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
      <button className="mr-2">
      </button>
      <div className="w-[1px] h-[50px] bg-gray mr-3">
      </div>
      <User />
    </>
  )
}