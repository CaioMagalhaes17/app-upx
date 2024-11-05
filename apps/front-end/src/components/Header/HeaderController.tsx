import { BusinessHeaderMenus } from "./components/BusinessHeaderMenus";
import { UserHeaderMenus } from "./components/UserHeaderMenus";

export function HeaderController() {
  function getCompanyHeaderButtons() {
    return <BusinessHeaderMenus />
  }

  function getUserHeaderMenus() {
    return <UserHeaderMenus />
  }

  function getHeaderMenus() {
    const user = 'c'
    if (user === 'u') {
      return getUserHeaderMenus()
    }
    else {
      return getCompanyHeaderButtons()
    }
  }

  function isAutenticated() {
    return true
  }

  return { getHeaderMenus, isAutenticated }
}