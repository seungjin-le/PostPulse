import React from 'react'
import CustomCursorPointer from '../cursor/CustomCursorPointer'
import {PostBtnProps} from 'lodash'

const PostBtn = ({onClick, text}: PostBtnProps) => {
  return (
    <button className={'px-4 py-3 bg-item rounded-item text-sm relative overflow-hidden'} onClick={onClick}>
      {text}
      <CustomCursorPointer />
    </button>
  )
}

export default PostBtn
