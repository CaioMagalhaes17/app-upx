import { Text } from "@kosky/ui";
import { useNavigate } from "react-router-dom";

export function ResultItem({ title, date, location, id, img }: { title: string, date: string, location: string, id: string, img: string }) {
  const navigation = useNavigate()
  return (
    <>
      <button onClick={() => navigation('/periods/details')} className="flex-[0_0_calc(25%-1.25rem)] h-[250px] px-2 flex flex-col border border-gray">
        <div className="mb-2">
          <img src={img} />
        </div>
        <Text className="font-bold text-[##9bb2ed] mb-2" as="span">{date}</Text>
        <Text className="items-center mb-5 text-lg text-white" as="h1">{title}</Text>
        <Text as="span">{location}</Text>
      </button>
    </>
  )
}