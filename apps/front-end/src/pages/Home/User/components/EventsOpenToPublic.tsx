import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Panel, Text } from "@kosky/ui"

export function EventsOpenToPublic() {
  const areas = [
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'ASD'
    },
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'Biologia'
    },
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'Finanças'
    },
    {
      img: 'https://images.sympla.com.br/66d7a0ac0a850-xs.png',
      name: 'Finanças'
    },
  ]
  return (
    <>
      <div>
        <Text as="h1" className="text-3xl w-full mb-5">Próximos eventos</Text>
        <Panel className="w-full  mr-auto ml-auto h-[31.25rem]">
          <div className="h-full border border-[#323b45] flex gap-10 items-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="gap-5">
                {areas.map((item, index) => {
                  return (
                    <CarouselItem key={index} className="basis-1/4 w-full border border-[#323b45]">
                      <div className="rounded-md mb-5">
                        <img src={item.img} />
                      </div>
                      <div className="">
                        <Text as="span">{item.name}</Text>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Panel>
      </div>
    </>
  )
}