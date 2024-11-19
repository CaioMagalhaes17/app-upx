import { Panel } from "@kosky/ui";
import { Banner } from "./components/Banner";
import { EventInfos } from "./components/Infos";

export function EventDetails() {
  const eventInfos = {
    title: 'Período de Qualificação 1',
    bannerImg: 'https://images.sympla.com.br/66d7a0ac0a850-lg.png',
    location: 'Belo Horizonte',
    date: '19/11',
    specialist: '',
    status: 'OPEN_TO_SPECIALISTS',
    company: 'Newton Paiva',
    description: 'Descrição detalhada do período de qualificação 1',
    politics: [
      {
        id: '1'
      },
      {
        id: '2'
      }
    ]
  }
  return (
    <div className="w-full flex flex-col items-center">
      <Banner bannerImg={eventInfos.bannerImg} />
      <Panel className="w-full h-full flex justify-center">
        <EventInfos {...eventInfos} />
      </Panel>
    </div>
  )
}