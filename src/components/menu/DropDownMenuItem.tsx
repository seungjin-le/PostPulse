import React, {memo} from 'react'
import {Menu} from '@headlessui/react'
import CustomCursorPointer from '../cursor/CustomCursorPointer'

const DropDownMenuItem = ({text, onClick}: any) => {
  return (
    <Menu.Item>
      <a
        href='#'
        className={
          'block px-4 py-3 text-sm relative rounded-item  overflow-hidden'
        }
        onClick={onClick}
      >
        {text}
        <CustomCursorPointer />
      </a>
    </Menu.Item>
  )
}

export default memo(DropDownMenuItem)
