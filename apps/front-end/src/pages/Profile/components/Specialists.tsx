import { Button, Input, Panel, Text } from "@kosky/ui";
import { useNavigate } from "react-router-dom";

export function SpecialistsProfile() {
  const participantesImg = 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png'
  const certificatesImgs = 'https://cdn-icons-png.flaticon.com/512/337/337946.png'
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
              <img className="rounded-3xl" width={'130px'} src={participantesImg} />
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
            </div>
          </div>
          <div className="w-full border mt-10 mb-2 border-gray" />
          <div className="flex flex-row justify-center">
            <Text className="text-white font-bold text-lg mb-5" as="h1">Áreas de conhecimento</Text>
            <div className="ml-auto" />
            <Button className="btn-primary">Adicionar áreas de conhecimento</Button>
          </div>
          <div className="flex flex-row gap-5 items-center justify-center">
            <div className="h-full w-[120px]">
              <img className="rounded-3xl" width={'130px'} src={"https://w7.pngwing.com/pngs/192/814/png-transparent-computer-programming-logo-design-angle-text-rectangle.png"} />
              <Text className="text-lg" as="span">Programação</Text>
            </div>
            <div className="h-full w-[120px]">
              <img className="rounded-3xl" width={'130px'} src={"https://w7.pngwing.com/pngs/314/772/png-transparent-logo-infant-health-future-med-design-sl-health-child-text-logo.png"} />
              <Text className="text-lg" as="span">Saúde</Text>
            </div>
            <div className="h-full w-[120px]">
              <img className="rounded-3xl" width={'130px'} src={"https://w7.pngwing.com/pngs/984/903/png-transparent-psychology-logo-organization-psychology-symbol-logo-psychology-psychologist.png"} />
              <Text className="text-lg" as="span">Psicologia</Text>
            </div>
          </div>
          <div className="w-full border mt-10 mb-2 border-gray" />
          <div className="flex flex-row justify-center">
            <Text className="text-white font-bold text-lg mb-5" as="h1">Participantes</Text>
            <div className="ml-auto" />
            <Button className="btn-primary">Adicionar participantes</Button>
          </div>
          <div className="flex flex-row gap-5 items-center justify-center">
            <div className="h-full w-[120px]">
              <img className="rounded-3xl" width={'130px'} src={participantesImg} />
              <Text className="text-lg" as="span">Participante 1 </Text>
            </div>
            <div className="h-full w-[120px]">
              <img className="rounded-3xl" width={'130px'} src={participantesImg} />
              <Text className="text-lg" as="span">Participante 2</Text>
            </div>
            <div className="h-full w-[120px]">
              <img className="rounded-3xl" width={'130px'} src={participantesImg} />
              <Text className="text-lg" as="span">Participante 3</Text>
            </div>
          </div>
          <div className="w-full border mt-10 mb-2 border-gray" />
          <div className="flex flex-row justify-center">
            <Text className="text-white font-bold text-lg mb-5" as="h1">Certificados</Text>
            <div className="ml-auto" />
            <Button className="btn-primary">Adicionar certificados</Button>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={certificatesImgs} />
            </div>
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={certificatesImgs} />
            </div>
            <div className="h-full w-[160px]">
              <img className="rounded-3xl" width={'130px'} src={certificatesImgs} />
            </div>
          </div>
        </Panel >
      </div>
    </>
  )
}