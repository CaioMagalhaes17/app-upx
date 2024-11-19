import { Sidebar } from "@kosky/ui";
import { AreasFilter } from "./filters/Areas";
import { DistanceFilter } from "./filters/Distance";
import { Modalidades } from "./filters/Modalidades";
import { useSearchParams } from "react-router-dom";

export function FiltersSidebar() {
  const [searchParams, setSearchParams] = useSearchParams({
    area: '',
    modalidade: '',
    distance: '100'
  })

  function onInputRadioChange(filter: string, target: EventTarget & HTMLInputElement) {
    const { value, checked } = target
    if (checked) {
      if (searchParams.get(filter) !== '') {
        if (searchParams.get(filter)?.includes(value)) return
        setSearchParams((prev) => {
          prev.set(filter, `${searchParams.get(filter)},${value}`)
          return prev
        })
        return
      }
      setSearchParams((prev) => {
        prev.set(filter, value)
        return prev
      })
    } else {
      const params = searchParams.get(filter)
      if (params) {
        const updatedString = params
          .split(",")
          .filter(item => item !== value)
          .join(",")

        setSearchParams((prev) => {
          prev.set(filter, updatedString)
          return prev
        })
      }
    }
  }

  function onDistanceChange(value: string) {
    const distance = Number(value) * 10
    setSearchParams((prev) => {
      prev.set('distance', String(distance))
      return prev
    })
  }

  return <>
    <Sidebar>
      <AreasFilter areasSelected={searchParams.get('area') || ''} onAreaChange={onInputRadioChange} />
      <div className="w-full border mt-2 mb-2 border-gray" />
      <DistanceFilter onDistanceChange={onDistanceChange} distanceValue={searchParams.get('distance')} />
      <div className="w-full border mt-2 mb-2 border-gray" />
      <Modalidades modalidadeSelected={searchParams.get('modalidade') || ''} onModalidadeChange={onInputRadioChange} />
    </Sidebar>
  </>
}