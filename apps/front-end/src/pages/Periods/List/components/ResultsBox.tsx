import { ResultItem } from "./ResultItem";

export function ResultsBox() {
  return <>
    <div className="flex flex-col px-5 py-5 border border-[#ffffff] ">
      <div className="flex flex-row px-5 py-5 gap-5 ">
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
      <div className="flex flex-row px-5 py-5 gap-5 ">
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
    </div>

  </>
}