import { Panel } from "@kosky/ui";
import { PeriodsHistoryController } from "./Controller";

export function PeriodsHistory() {
  const { getPeriodsHistory } = PeriodsHistoryController()

  return <>
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[87.5rem] w-full text-left mt-5">
        <Panel className="w-full flex justify-center items-center">
          {getPeriodsHistory()}
        </Panel>
      </div>
    </div>
  </>
}