'use client'
import React, {memo, useEffect} from 'react'
import PostItem from './PostItem'
import {getData} from '../../utility/apiModuls'
import {EndPoint} from '../../dataManaget/apiMapper'
import {postsState} from '../../recoil/PostsAtom'
import {useRecoilState} from 'recoil'

const PostList = () => {
  const [post, setPost] = useRecoilState(postsState)

  const getDates = () => {
    getData(EndPoint.GET_POSTS)
      .then(res => {
        setPost(res)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getDates()
    console.log(post)
  }, [])

  return (
    <div className={'w-full h-full relative'}>
      {post?.map((v, i) => {
        return <PostItem key={i} post={v} />
      })}
    </div>
  )
}

export default memo(PostList)
