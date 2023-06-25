'use client'
import React from 'react'
import {RecoilRoot} from 'recoil'
import dynamic from 'next/dynamic'
const NoSsrWysiwyg = dynamic(() => import('../../components/editor/PostEditor'), {ssr: false})

const page = () => {
  return (
    <RecoilRoot>
      <div className={'w-full h-[90%] p-12 pt-6 flex flex-col items-center'}>
        <NoSsrWysiwyg />
      </div>
    </RecoilRoot>
  )
}

export default page
