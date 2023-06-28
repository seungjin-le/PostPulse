import React, {memo} from 'react'
import CustomCursorPointer from '../cursor/CustomCursorPointer'

const PostTagItem = ({tag}: any) => {
  return (
    <span className={'px-4 py-2 mr-2 bg-item  rounded-container cursor-pointer relative whitespace-nowrap'}>
      {tag}
      <CustomCursorPointer />
    </span>
  )
}

export default memo(PostTagItem)
