import useStore from "@/zustand";
import { CompanyPeriodsHistory } from "./components/Company";
import { SpecialistPeriodsHistory } from "./components/Specialist";

export function PeriodsHistoryController() {
  const { userInfos } = useStore()

  function getSpecialistPeriodsHistory() {
    return <SpecialistPeriodsHistory />
  }

  function getCompanyPeriodsHistory() {
    return <CompanyPeriodsHistory />
  }

  function getPeriodsHistory() {
    if (userInfos.role === 'specialist') {
      return getSpecialistPeriodsHistory()
    } else {
      return getCompanyPeriodsHistory()
    }
  }

  return { getPeriodsHistory }
}