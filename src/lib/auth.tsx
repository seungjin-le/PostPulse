/** @type { import("next-auth/adapters").Adapter } */
import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
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
})
