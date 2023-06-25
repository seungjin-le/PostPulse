import React from 'react'
import PostItem from './PostItem'

const PostList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className={'w-full h-full relative'}>
      {arr.map(v => {
        return <PostItem key={v} />
      })}
    </div>
  )
}

export default PostList
