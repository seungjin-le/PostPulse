import React from 'react'
import {LayoutProps} from 'lodash'
import Header from '../header/Header'

const MainLayout = ({children}: LayoutProps) => {
  return (
    <div className={'w-screen h-screen bg-pageBg'}>
      <div className={'bg-header w-full max-h-[100px] h-full fixed left-0'}>
        <div className={'max-w-[1600px] w-full h-full mx-auto relative'}>
          <Header />
        </div>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
