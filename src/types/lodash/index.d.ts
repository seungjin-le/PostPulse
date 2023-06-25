import {ReactNode} from 'react'

declare module 'lodash' {
  export interface LayoutProps {
    children: ReactNode
  }
  export interface PostBtnProps {
    onClick: () => void
    text: string
  }
}
