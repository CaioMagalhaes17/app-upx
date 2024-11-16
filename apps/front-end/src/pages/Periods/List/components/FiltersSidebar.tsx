import { Sidebar } from "@kosky/ui";
import { AreasFilter } from "./filters/Areas";
import { DistanceFilter } from "./filters/Distance";
import { PeriodDaysFilter } from "./filters/PeriodDays";

export function FiltersSidebar() {
  return <>
    <Sidebar>
      <AreasFilter />
      <div className="w-full border mt-2 mb-2 border-gray" />
      <DistanceFilter />
      <div className="w-full border mt-2 mb-2 border-gray" />
      <PeriodDaysFilter />
    </Sidebar>
  </>
}