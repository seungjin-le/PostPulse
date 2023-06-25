'use client'
import React from 'react'

const PostItem = () => {
  const tags = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5']

  return (
    <div className={'w-full mb-4'}>
      <div className={'w-full flex flex-col justify-between  relative bg-pageBg rounded-item overflow-hidden p-4'}>
        <div className={'text-2xl'}>
          <span className={'cursor-pointer'}>Title</span>
        </div>
        <div className={'my-2 text-description '}>
          <span className={'cursor-pointer'}>Description</span>
        </div>
        <div className={'my-4'}>
          {tags.map(v => {
            return (
              <span key={v} className={'p-2 bg-item mr-2 mb-2 rounded-container cursor-pointer'}>
                {v}
              </span>
            )
          })}
        </div>
        <div>
          <span className={'cursor-pointer'}>2023년 4월 24일</span>
        </div>
      </div>
    </div>
  )
}

export default PostItem
