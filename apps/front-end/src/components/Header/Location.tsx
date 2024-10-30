import { IconMapPin, Text } from "@kosky/ui";

export function Location() {
  return (
    <>
      <button className="dark:hover:text-white flex items-center gap-2 mr-10 font-bold">
        <IconMapPin />
        <Text as="span">Localização</Text>
      </button>
    </>
  )
}