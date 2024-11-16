import { Text } from "@kosky/ui";

export function PeriodDaysFilter() {
  return (
    <>
      <Text as="h1" className="text-lg mb-2 text-white">Duração do período</Text>
      <div className="flex gap-5 justify-evenly flex-row">
        <div className="flex flex-row items-center ">
          <input className="form-radio mr-2" type="checkbox" />
          <span>Menos de uma semana</span>
        </div>
        <div className="flex flex-row items-center ">
          <input className="form-checkbox mr-2" type="checkbox" />
          <span>1 Semana</span>
        </div>
      </div>
      <div className="flex mt-5 gap-[100px] justify-evenly flex-row">
        <div className="flex flex-row items-center ">
          <input className="form-radio mr-2" type="checkbox" />
          <span>2 Semana</span>
        </div>
        <div className="flex flex-row items-center ">
          <input className="form-checkbox mr-2" type="checkbox" />
          <span>3 Semanas</span>
        </div>
      </div>
    </>
  )
}