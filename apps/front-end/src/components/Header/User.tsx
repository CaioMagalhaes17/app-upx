import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, IconLogout, IconMinus, IconPlus, IconUser, Text } from "@kosky/ui";

export function User() {
  const profileimg = 'https://static-cdn.jtvnw.net/jtv_user_pictures/2e880ff4-7a44-4ec5-9d88-06d3b2286856-profile_image-70x70.png'
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          <img className="mr-5 rounded-3xl" width={'60px'} src={profileimg} />
          <Text as="span" className="text-white text-lg font-bold">Caio Magalhães</Text>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white bg-black mt-2">
          <DropdownMenuItem className="">
            <IconUser className="mr-2" />
            Minha conta
          </DropdownMenuItem>
          <DropdownMenuItem className="text-success">
            <IconPlus className="mr-2" />
            Depositar
          </DropdownMenuItem>
          <DropdownMenuItem className="text-warning">
            <IconMinus className="mr-2" />
            Sacar
          </DropdownMenuItem>
          <DropdownMenuItem className="text-danger">
            <button className="flex">
              <IconLogout className="mr-2 rotate-90" />
              Sair
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>

      </DropdownMenu>
    </>
  )
}