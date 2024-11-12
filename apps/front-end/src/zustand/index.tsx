import { create } from 'zustand'

type ZustandStore = {
  userInfos: UserInfos
}

type UserInfos = {
  name: string
  role: string
}
const useStore = create<ZustandStore>((set) => {
  return {
    userInfos: {
      name: '',
      role: ''
    },
    setUserInfos: (userInfos: UserInfos) => {
      set({
        userInfos
      })
    }
  }
})

export default useStore