import { Text } from "@kosky/ui";

export function AreasFilter({ onAreaChange, areasSelected }: { onAreaChange: (area: string, target: EventTarget & HTMLInputElement) => void, areasSelected: string }) {
  const studyAreas = [
    {
      id: 1,
      name: 'Saude'
    },
    {
      id: 2,
      name: 'Tecnologia'
    },
    {
      id: 3,
      name: 'Direito'
    },
  ]
  return (
    <>
      <Text as="h1" className="text-lg mb-2 text-white">Áreas de atuação</Text>
      <div className="flex flex-col">
        {studyAreas.map((item, key) => {
          return (
            <div key={key} className="flex flex-row items-center mb-1">
              <input checked={areasSelected.includes(item.name)} onChange={(event) => onAreaChange('area', event.target)} value={item.name} className="form-radio mr-2" type="checkbox" />
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}