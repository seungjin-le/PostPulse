'use client'
import React, {useEffect, useState} from 'react'
import {useRef} from 'react'
import {useMotionValueEvent, useScroll} from 'framer-motion'
import PostTagItem from './PostTagItem'

const PostTagList = ({tags}: any) => {
  const ref = useRef<HTMLUListElement>(null)
  const {scrollXProgress} = useScroll({container: ref})
  const [scrollX, setScrollX] = useState('')
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (element && element.scrollWidth > element.clientWidth) {
      setScrollX('shadow-tagBoxRight')
      setIsOverflowing(true)
    }
  }, [tags])

  useMotionValueEvent(scrollXProgress, 'change', latest => {
    if (isOverflowing) {
      if (latest > 0.02 && latest < 0.99) {
        setScrollX('shadow-tagBoxXAll')
      } else if (latest <= 0.02) {
        setScrollX('shadow-tagBoxRight')
      } else if (latest >= 0.99) {
        setScrollX('shadow-tagBoxLeft')
      }
    }
  })

  return (
    <>
      <ul
        ref={ref}
        className={`flex overflow-x-scroll ${scrollX} px-4 py-2 rounded-container mt-2 h-12 flex flex-row overflow-y-hidden overflow-x-scroll  items-center justify-start w-full scrollbar-hide`}
      >
        {tags &&
          tags.map((value: string, i: number) => {
            return <PostTagItem tag={value} key={i} />
          })}
      </ul>
    </>
  )
}

export default PostTagList
