import { Text } from "@kosky/ui";

export function Modalidades({ onModalidadeChange, modalidadeSelected }: { onModalidadeChange: (modalidade: string, target: EventTarget & HTMLInputElement) => void, modalidadeSelected: string }) {
  const modalidades = [
    {
      name: 'A distância',
      id: 'ead'
    },
    {
      name: 'Presencial',
      id: 'presencial'
    },
    {
      name: 'Flex',
      id: 'flex'
    },
    {
      name: 'A combinar',
      id: 'todecide'
    },

  ]
  return (
    <>
      <Text as="h1" className="text-white text-lg mb-2">Modalidades</Text>
      <div className="flex flex-col">
        {
          modalidades.map((item, key) => {
            return (
              <>
                <div key={key} className="flex flex-row items-center mb-1">
                  <input checked={modalidadeSelected.includes(item.id)} onChange={(event) => onModalidadeChange('modalidade', event.target)} value={item.id} className="form-radio mr-2" type="checkbox" />
                  <span>{item.name}</span>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}