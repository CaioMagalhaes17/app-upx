import { Button, Input, Panel, Text } from "@kosky/ui";
import { useNavigate } from "react-router-dom";

export function SpecialistsProfile() {
  const profileimg = 'https://static-cdn.jtvnw.net/jtv_user_pictures/2e880ff4-7a44-4ec5-9d88-06d3b2286856-profile_image-70x70.png'
  const navigate = useNavigate()

  return (
    <>
      <div className="mt-10 w-full flex justify-center">
        <Panel className="min-w-[1100px]">
          <div className="flex flex-row items-center justify-center">
            <Text className="text-center text-white font-bold text-lg" as="h1">Perfil do grupo especializante</Text>
            <div className="mr-auto" />
            <Button onClick={() => navigate('/profile')} className="btn-primary">
              Acessar perfil de usuário
            </Button>
          </div>
          <div className="w-full border mt-2 mb-10 border-gray" />
          <div className="flex flex-row">
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={profileimg} />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-5 w-full">
              <div>
                <label>Nome</label>
                <Input type="text" disabled value="PHP Minas Gerais" />
              </div>
              <div>
                <label>Telefone</label>
                <Input type="text" disabled value="(31) 99585-3806" />
              </div>
              <div>
                <label>Endereço</label>
                <Input type="text" value="Belo Horizonte, Minas Gerais" />
              </div>
              <div>
                <label>Áreas de especialização</label>
                <select value="Áreas de especialização">
                  <option value="asd"></option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full border mt-10 mb-2 border-gray" />
          <Text className="text-center font-bold text-lg mb-5" as="h1">Participantes</Text>
          <div className="flex flex-row items-center justify-center">
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={profileimg} />
            </div>
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={profileimg} />
            </div>
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={profileimg} />
            </div>
          </div>
          <div className="w-full border mt-10 mb-2 border-gray" />
          <Text className="text-center font-bold text-lg mb-5" as="h1">Certificados</Text>
          <div className="flex flex-row items-center justify-center">
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={profileimg} />
            </div>
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={profileimg} />
            </div>
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={profileimg} />
            </div>
          </div>
        </Panel >
      </div>
    </>
  )
}