import { Panel, Text } from "@kosky/ui";

export default function Home() {
  const areas = [
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'Tecnologia'
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
    <div className="w-full flex flex-col items-center px-20">
      <Text as="h1" className="text-3xl w-full">Áreas de especialização</Text>
      <Panel className="w-full  mr-auto ml-auto h-[31.25rem]">
        <div className="h-full w-full border border-[#323b45] flex gap-10 items-center">
          {areas.map((item) => {
            return (
              <div className="w-[25%] border border-[#323b45]">
                <div className="rounded-md mb-5">
                  <img src={item.img} />
                </div>
                <Text as="span">{item.name}</Text>
              </div>
            )
          })}
        </div>
      </Panel>
    </div>
  )
}