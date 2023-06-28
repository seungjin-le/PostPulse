import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import {NextAuthOptions} from 'next-auth'
import * as process from 'process'
import {loginUser} from '../utility/zustand/UserZustand'

export const options: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_LOGIN_API_KEY!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_LOGIN_API_KEY!,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET!,
    }),
  ],
  events: {
    async signIn(data) {
      const {logIn} = loginUser()
      console.log(data, logIn)
      logIn({...data.user, ...data.account})
    },
    async signOut(message) {},
    async session(message) {},
  },
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({token}) {
      return token
    },
    async session({session, user, token}) {
      return session
    },
  },
}

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
