import { Text } from "@kosky/ui"

export function DistanceFilter() {
  return <>
    <Text as="h1" className="text-lg mb-2 text-white">Limite de distância em Km</Text>
    <div className="flex flex-col">
      <span>progressive bar</span>
      <span>0km</span>
    </div>
  </>
}