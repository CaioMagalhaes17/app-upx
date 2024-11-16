import { Text } from "@kosky/ui";

export function AreasFilter() {
  return (
    <>
      <Text as="h1" className="text-lg mb-2 text-white">Áreas de atuação</Text>
      <div className="flex flex-col">
        <div className="flex flex-row items-center mb-1">
          <input className="form-radio mr-2" type="checkbox" />
          <span>Saude</span>
        </div>
        <div className="flex flex-row items-center mb-1">
          <input className="form-radio mr-2" type="checkbox" />
          <span>Saude</span>
        </div>
        <div className="flex flex-row items-center mb-1">
          <input className="form-radio mr-2" type="checkbox" />
          <span>Saude</span>
        </div>
      </div>
    </>
  )
}