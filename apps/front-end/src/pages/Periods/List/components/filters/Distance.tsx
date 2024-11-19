import { Text } from "@kosky/ui"

export function DistanceFilter({ distanceValue, onDistanceChange }) {
  return <>
    <Text as="h1" className="text-lg mb-2 text-white">Limite de distância em Km</Text>
    <div className="flex flex-col">
      <input type="range" onChange={(event) => onDistanceChange(event.target.value)} className="w-full py-2.5" min="0" max="10" />
      <span>{distanceValue} km</span>
    </div>
  </>
}