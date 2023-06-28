import {Menu, Transition} from '@headlessui/react'
import React, {memo} from 'react'
import {Fragment} from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import DropDownMenuItem from '../menu/DropDownMenuItem'
import CustomCursorPointer from '../cursor/CustomCursorPointer'
import {signIn} from 'next-auth/react'
import Divider from '../divider/Divider'

const LogInDropDownMenu = () => {
  return (
    <Menu as='div' className='relative inline-block '>
      <div
        className={
          'relative bg-item rounded-item overflow-hidden border-solid border-texts border'
        }
      >
        <Menu.Button className='rounded-md flex flex-row p-2 items-center justify-between'>
          Login
          <AiOutlineDown
            className='-mr-1 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
          <CustomCursorPointer />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 bg-item rounded-container shadow-lg ring-1 px-2 py-2'>
          <DropDownMenuItem text={'Kakao'} onClick={() => signIn('kakao')} />
          <Divider />
          <DropDownMenuItem text={'Naver'} onClick={() => signIn('naver')} />
          <Divider />
          <DropDownMenuItem text={'Email'} onClick={() => signIn('naver')} />
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default memo(LogInDropDownMenu)
