import useStore from "@/zustand";
import { BusinessHome } from "./Business";
import { SpecialistHome } from "./Specialist";
import UserHome from "./User";

export function HomeController() {
  const { userInfos } = useStore()
  function getProfileHome() {
    if (userInfos.role === 'user') {
      return <UserHome />
    }
    if (userInfos.role === 'specialist') {
      return <SpecialistHome />
    }
    if (userInfos.role === 'company') {
      return <BusinessHome />
    }

  }

  return { getProfileHome }
}