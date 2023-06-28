'use client'
import React, {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import PostTagList from '../tags/PostTagList'

const PostItem = ({post}: any) => {
  const [formatData, setFormatData] = useState({
    date: '',
    content: '',
  })
  useEffect(() => {
    setFormatData({
      date: dayjs(post?.createdAt).format('YYYY년 MM월 DD일'),
      content: post.postContent.replaceAll(/!\[(.+?)\]\((.+?)\)/g, '[Image]'),
    })
  }, [])

  return (
    <div className={'w-full mb-4'}>
      <div
        className={
          'w-full flex flex-col justify-between  relative bg-pageBg rounded-item overflow-hidden p-4'
        }
      >
        <div className={'text-2xl'}>
          <span className={'cursor-pointer'}>{post?.postTitle}</span>
        </div>
        <div className={'my-2 text-description '}>
          <span className={'cursor-pointer'}>{formatData?.content}</span>
        </div>
        <div className={'my-4'}>
          <PostTagList tags={post.postTags} />
        </div>
        <div>
          <span className={'cursor-pointer'}>{formatData.date}</span>
        </div>
      </div>
    </div>
  )
}

export default PostItem
