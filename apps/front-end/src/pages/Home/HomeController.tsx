import { BusinessHome } from "./Business";
import { SpecialistHome } from "./Specialist";
import UserHome from "./User";

export function HomeController() {
  function getProfileHome() {
    return <SpecialistHome />
    // // return <BusinessHome />
    // return <UserHome />
  }

  return { getProfileHome }
}