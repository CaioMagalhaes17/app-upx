import { EventsOpenToPublic } from "./components/EventsOpenToPublic";
import { KnowledgeCategories } from "./components/KnowledgeCategories";

export default function UserHome() {

  return (
    <div className="w-full flex flex-col items-center px-20">
      <KnowledgeCategories />
      <EventsOpenToPublic />
    </div>
  )
}