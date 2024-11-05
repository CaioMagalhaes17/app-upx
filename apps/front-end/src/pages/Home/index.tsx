import { HomeController } from "./HomeController";

export function Home() {
  const { getProfileHome } = HomeController()
  return (
    <>
      {getProfileHome()}
    </>
  )
}