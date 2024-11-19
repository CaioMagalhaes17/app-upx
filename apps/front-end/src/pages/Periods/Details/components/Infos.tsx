import { Text } from "@kosky/ui";
import { useNavigate } from "react-router-dom";

export function EventInfos() {
  const navigate = useNavigate()
  return (
    <>
      <div className="max-w-[1100px] w-full text-left">
        <div className="mb-10">
          <Text as="h1" className="mb-5 text-white font-bold text-5xl">Título do período de qualificação</Text>
          <Text as="h1" className="mb-2 font-bold text-2xl">Data</Text>
          <Text as="h1" className="font-bold text-2xl">Local</Text>
        </div>
        <hr className="w-full mb-5"></hr>
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
        <div className="fixed bottom-4 right-10">
          <button onClick={() => navigate('/event/signup')} className="bg-blue-500 font-bold text-lg text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600">
            Candidatar-se
          </button>
        </div>
      </div>
    </>
  )
}