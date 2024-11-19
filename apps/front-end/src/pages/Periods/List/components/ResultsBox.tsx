import { ResultItem } from "./ResultItem";

export function ResultsBox() {
  const results = [
    {
      img: "https://images.sympla.com.br/66d7a0ac0a850-xs.png",
      id: '1',
      title: 'Título 1',
      date: '19/11',
      location: 'Belo Horizonte'
    },
    {
      img: "https://images.sympla.com.br/66d7a0ac0a850-xs.png",
      id: '2',
      title: 'Título 2',
      date: '19/11',
      location: 'Belo Horizonte'
    },
    {
      img: "https://images.sympla.com.br/66d7a0ac0a850-xs.png",
      id: '3',
      title: 'Título 3',
      date: '19/11',
      location: 'Belo Horizonte'
    },
    {
      img: "https://images.sympla.com.br/66d7a0ac0a850-xs.png",
      id: '4',
      title: 'Título 4',
      date: '19/11',
      location: 'Belo Horizonte'
    },
    {
      img: "https://images.sympla.com.br/66d7a0ac0a850-xs.png",
      id: '5',
      title: 'Título 5',
      date: '19/11',
      location: 'Belo Horizonte'
    },
  ]
  return <>
    <div className="flex flex-col ">
      <div className="flex flex-row flex-wrap  gap-5 ">
        {
          results.map((item) => {
            return (
              <>
                <ResultItem {...item} />
              </>
            )
          })
        }
      </div>
    </div>

  </>
}