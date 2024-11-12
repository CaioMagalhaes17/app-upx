import useStore from "@/zustand";
import { BusinessHeaderMenus } from "./components/business/BusinessHeaderMenus";
import { UserHeaderMenus } from "./components/user/UserHeaderMenus";
import { LoginButtons } from "./components/LoginButtons";
import { SpecialistHeaderMenus } from "./components/specialist/SpecialistHeaderMenus";

export function HeaderController() {
  const { userInfos } = useStore()

  function getCompanyHeaderButtons() {
    return <BusinessHeaderMenus />
  }

  function getUserHeaderMenus() {
    return <UserHeaderMenus />
  }

  function getSpecialistHeaderMenus() {
    return <SpecialistHeaderMenus />
  }

  function isAutenticated() {
    if (userInfos.name === '') {
      return false
    }
    return true
  }

  function getHeaderMenus() {
    console.log(userInfos)
    if (userInfos.role === 'user') {
      return getUserHeaderMenus()
    }
    if (userInfos.role === 'specialist') {
      return getSpecialistHeaderMenus()
    }
    if (userInfos.role === 'company') {
      return getCompanyHeaderButtons()
    }
    if (!isAutenticated()) {
      return <LoginButtons />
    }
  }

  return { getHeaderMenus, isAutenticated }
}