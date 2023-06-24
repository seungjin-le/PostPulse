import React from 'react'
import LoginDropDownMenu from '../../components/dropDown/LoginDropDownMenu'

const Header = () => {
  return (
    <div className={'h-full w-full flex flex-row items-center justify-center px-12'}>
      <div className={'flex-1 flex w-full justify-start h-full items-center'}>
        <img className={'max-h-[50px]'} src='/images/logo/reactLogo.png' alt='' />
      </div>
      <div className={'w-full flex-1 flex flex-col  justify-end h-full items-center ra'}>
        <div>icon</div>
        <LoginDropDownMenu />
      </div>
    </div>
  )
}

export default Header
