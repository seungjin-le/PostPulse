import React, {memo} from 'react'
import {Menu} from '@headlessui/react'
import CustomCursorPointer from '../cursor/CustomCursorPointer'

const DropDownMenuItem = () => {
  return (
    <Menu.Item>
      <a href='#' className={'block px-4 py-2 text-sm relative'}>
        Support
        <CustomCursorPointer />
      </a>
    </Menu.Item>
  )
}

export default memo(DropDownMenuItem)
