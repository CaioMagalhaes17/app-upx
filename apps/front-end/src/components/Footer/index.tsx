import { Logo, Text, Footer as UiFooter } from "@kosky/ui";

export function Footer() {
  return <UiFooter style={{ "borderTopWidth": "5px" }} className="mt-10 border-t-[#323b45] flex flex-col items-center p-10">
    <div className="w-[1100px] h-[300px]">
      <div>
        <Logo />
      </div>
      <div className="flex flex-row text-left mt-10 gap-5 justify-evenly w-full text-white font-bold text-2xl">
        <Text as="span">Link</Text>
        <Text as="span">Link</Text>
        <Text as="span">Link</Text>
        <Text as="span">Link</Text>
      </div>
    </div>
  </UiFooter>
}