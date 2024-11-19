import { Text } from "@kosky/ui";
import { FiltersSidebar } from "./components/FiltersSidebar";
import { ResultsBox } from "./components/ResultsBox";

export function PeriodsList() {
  return (
    <>
      <FiltersSidebar />
      <div style={{ padding: '10px 12px 0 375px' }} className="w-full mt-5">
        <Text className="font-bold text-4xl text-white mb-5" as="h1">Períodos de qualificação abertos para inscrições de especialistas</Text>
        <div className="w-full border mt-2 mb-10 border-gray" />
        <ResultsBox />
      </div>
    </>
  )
}