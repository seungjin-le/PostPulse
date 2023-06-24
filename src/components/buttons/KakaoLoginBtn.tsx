'use client'
import React from 'react'
import {signIn} from 'next-auth/react'

const KakaoLoginBtn = () => {
  return (
    <div>
      <button onClick={() => signIn('kakao')}>Kakao Sign in</button>
    </div>
  )
}

export default KakaoLoginBtn
