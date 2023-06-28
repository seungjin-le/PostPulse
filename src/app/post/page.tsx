'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const NoSsrWysiwyg = dynamic(
  () => import('../../components/editor/PostEditor'),
  {ssr: false},
)

const page = () => {
  return (
    <div className={'w-full h-[90%] p-12 pt-6 flex flex-col items-center'}>
      <NoSsrWysiwyg />
    </div>
  )
}

export default page
