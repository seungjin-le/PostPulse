import create from 'zustand'
import {UserTypes} from 'lodash'
import {createJSONStorage, persist} from 'zustand/middleware'
import {signOut} from 'next-auth/react'

interface UserState {
  isLoggedIn: boolean
  user: UserTypes
  account: any
  logIn: (data: any) => void
  logOut: () => void
  setUser: (user: any) => void
}

const useUserStore = create<UserState>(set => ({
  isLoggedIn: false,
  account: {},
  user: {
    platform: '',
    name: '',
    email: '',
    picture: '',
    sub: '',
    iat: 0,
    exp: 0,
    jti: '',
  },
  logIn: data =>
    set({isLoggedIn: true, user: data.user, account: data.account}),
  logOut: () => set({isLoggedIn: false}),
  setUser: userData => {
    if (userData) {
      set({isLoggedIn: true, user: userData})
    }
  },
}))

export const loginUser = create(
  persist(
    set => ({
      user: null,
      isLoggedIn: false,
      logIn: data => set({user: data, isLoggedIn: true}),
      logOut: () => {
        set({user: null, isLoggedIn: false})
        localStorage.removeItem('user')
        signOut()
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useUserStore

//{
//   user: {
//     id: '2806013468',
//     name: '이승진',
//     email: 'dltmdwls154@kakao.com',
//     image: 'http://k.kakaocdn.net/dn/bFbA6x/btrG8HZPH69/9DSO7oo31I4Fdqcklzipt0/img_640x640.jpg'
//   },
//   account: {
//     provider: 'kakao',
//     type: 'oauth',
//     providerAccountId: '2806013468',
//     access_token: 'VLGBZrXqLGRsCjRgYtrw_xOrAl7cLCHZwaj1gnd-CiolUQAAAYkCm07n',
//     token_type: 'bearer',
//     refresh_token: 'tIbAOUJLErsq5GNGnDUsVbTGNldbjK5RlxqkzMQCCiolUQAAAYkCm07l',
//     expires_at: 1687987478,
//     scope: 'age_range birthday account_email profile_image gender profile_nickname story_permalink',
//     refresh_token_expires_in: 5183999
//   },
//   profile: {
//     id: '2806013468',
//     name: '이승진',
//     email: 'dltmdwls154@kakao.com',
//     image: 'http://k.kakaocdn.net/dn/bFbA6x/btrG8HZPH69/9DSO7oo31I4Fdqcklzipt0/img_640x640.jpg'
//   },
//   isNewUser: undefined
// }
