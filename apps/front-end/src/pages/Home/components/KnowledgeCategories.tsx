import { Panel, Text } from "@kosky/ui"

export function KnowledgeCategories() {
  const areas = [
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'ASD'
    },
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'Biologia'
    },
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'Finanças'
    },
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'Finanças'
    },
  ]
  return (
    <div className="mb-10">
      <Text as="h1" className="text-3xl w-full mb-5">Categorias de Conhecimento</Text>
      <Panel className="w-full  mr-auto ml-auto h-[31.25rem]">
        <div className="h-full border border-[#323b45] flex gap-10 items-center">
          {areas.map((item) => {
            return (
              <div className="w-[25%] border border-[#323b45]">
                <div className="rounded-md mb-5">
                  <img src={item.img} />
                </div>
                <div className="">
                  <Text as="span">{item.name}</Text>
                </div>
              </div>
            )
          })}
        </div>
      </Panel>
    </div>
  )
}