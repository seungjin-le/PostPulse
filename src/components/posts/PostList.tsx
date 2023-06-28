'use client'
import React, {memo, useEffect} from 'react'
import PostItem from './PostItem'
import {getData} from '../../utility/apiModuls'
import {EndPoint} from '../../dataManaget/apiMapper'
import usePostStore from '../../utility/zustand/PostsZustand'

const PostList = () => {
  const {posts, setPosts} = usePostStore()

  const getDates = () => {
    getData(EndPoint.GET_POSTS)
      .then(res => {
        setPosts(res)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getDates()
  }, [])

  return (
    <div className={'w-full h-full relative'}>
      {posts.length > 0 &&
        posts?.map((v, i) => {
          return <PostItem key={i} post={v} />
        })}
    </div>
  )
}

export default memo(PostList)
