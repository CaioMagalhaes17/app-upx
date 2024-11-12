import { Text } from "@kosky/ui";

export function EventInfos() {
  return (
    <>
      <div className="max-w-[1100px] w-full text-left">
        <div className="mb-10">
          <Text as="h1" className="mb-5 text-white font-bold text-5xl">Título evento</Text>
          <Text as="h1" className="mb-2 font-bold text-2xl">Data evento</Text>
          <Text as="h1" className="font-bold text-2xl">Local evento</Text>
        </div>
        <div className="mb-10">
          <Text as="h1" className="mb-5 text-white font-bold text-5xl">Organizadores</Text>
          <Text as="h1" className="mb-2 font-bold text-2xl">Grupo a fazer qualificação</Text>
          <Text as="h1" className="font-bold text-2xl">Empresa que contratou qualificação</Text>
        </div>
        <hr className="w-full mb-5"></hr>
        <div className="mb-10">
          <Text as="h1" className="mb-5 text-white font-bold text-5xl">Descrição do evento</Text>
          <Text as="h1" className="mb-2 font-bold text-2xl">Descrição</Text>
        </div>
        <hr className="w-full mb-5"></hr>
        <div className="mb-10">
          <Text as="h1" className="mb-5 text-white font-bold text-5xl">Política do evento</Text>
          <Text as="h1" className="mb-2 font-bold text-2xl">Opções de política</Text>
        </div>
      </div>
    </>
  )
}