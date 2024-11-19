import { Button, Input, Panel, Text } from "@kosky/ui";

export function PeriodSignupForm() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1200px] w-full text-left mt-10">
          <Panel className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-[600px] flex flex-col">
              <Text className="text-white font-bold text-4xl mb-2" as="h1">Formulário de inscrição</Text>
              <Text as="span">Se candidate para poder assumir o período de qualificação "NOME PERIODO", da empresa "EMPRESA".</Text>
              <div className="w-full border mt-5 mb-5 border-gray" />
              <Text className="text-lg font-bold" as="span">Disponibilidades para assumir período:</Text>
              <div className="mt-2">
                <label className="flex p-2 items-center cursor-pointer">
                  <input type="checkbox" className="form-radio" defaultChecked />
                  <span className="ml-2">A distância</span>
                </label>
                <label className="flex p-2 items-center cursor-pointer mt-3">
                  <input type="checkbox" className="form-radio" />
                  <span className="ml-2">Presencialmente</span>
                </label>
                <label className="flex p-2 items-center cursor-pointer mt-3">
                  <input type="checkbox" className="form-radio" />
                  <span className="ml-2">Todos</span>
                </label>
              </div>
              <div className="w-full border mt-5 mb-5 border-gray" />
              <textarea className="w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-sm font-semibold text-black !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary" placeholder="Detalhes adicionais"></textarea>
              <div className="ml-auto mt-5">
                <Button className="btn-primary">Enviar</Button>
              </div>
            </div>
          </Panel>
        </div >
      </div >
    </>
  )
}