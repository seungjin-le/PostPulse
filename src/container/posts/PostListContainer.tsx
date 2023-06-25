import React from 'react'
import PostList from '../../components/posts/PostList'

const PostListContainer = () => {
  return (
    <div className={'w-full h-auto border-texts border rounded-container p-4 pb-0'}>
      <PostList />
    </div>
  )
}

export default PostListContainer
