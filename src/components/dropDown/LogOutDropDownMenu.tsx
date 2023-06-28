import {Menu, Transition} from '@headlessui/react'
import React, {memo} from 'react'
import {Fragment} from 'react'
import {AiFillSetting, AiOutlineDown} from 'react-icons/ai'
import DropDownMenuItem from '../menu/DropDownMenuItem'
import CustomCursorPointer from '../cursor/CustomCursorPointer'
import {loginUser} from '../../utility/zustand/UserZustand'

const LogOutDropDownMenu = ({user}: any) => {
  const {logOut} = loginUser()
  return (
    <div className={'flex flex-row h-full'}>
      <div className={'h-full flex items-center mr-4'}>
        <span className={'text-xl mr-2'}>{user?.name}님 안녕하세요</span>
        <span>
          <img
            src={user?.image}
            alt=''
            className={'max-h-[50px] rounded-full'}
          />
        </span>
      </div>
      <div className={'h-full flex items-center'}>
        <Menu as='div' className='relative inline-block'>
          <div
            className={
              'relative bg-item rounded-item overflow-hidden border-solid border-texts border'
            }
          >
            <Menu.Button className='rounded-md flex flex-row p-2 items-center justify-between'>
              <AiFillSetting className={'text-2xl mr-2'} />
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
            <Menu.Items className='absolute right-0 z-10 mt-2 w-56 bg-item rounded-container shadow-lg ring-1 '>
              <div>
                <DropDownMenuItem onClick={() => logOut()} text={'LogOut'} />
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default memo(LogOutDropDownMenu)
