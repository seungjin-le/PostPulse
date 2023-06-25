'use client'
import LoginDropDownMenu from '../../components/dropDown/LoginDropDownMenu'

const Header = () => {
  return (
    <div className={'h-[100px] w-full items-center relative '}>
      <div className={'fixed w-full bg-header h-[100px] left-0 z-10'}>
        <div className={'flex flex-row max-w-[1600px] w-full max-h-24 h-full px-12 mx-auto'}>
          <div className={'flex-1 flex w-full justify-start  h-full items-center '}>
            <img className={'max-h-[50px] mr-4'} src='/images/logo/reactLogo.png' alt='logo' />
            <div className={'text-3xl'}>Post Pulse</div>
          </div>
          <div className={'flex-1 flex flex-col justify-center h-full items-end ra'}>
            <LoginDropDownMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
