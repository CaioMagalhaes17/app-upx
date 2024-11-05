import { Panel } from "@kosky/ui";
import { Banner } from "./components/Banner";
import { EventInfos } from "./components/Infos";

export function EventDetails() {
  return (
    <div className="w-full flex flex-col items-center">
      <Banner />
      <Panel className="w-full h-full flex justify-center">
        <EventInfos />
      </Panel>
    </div>
  )
}