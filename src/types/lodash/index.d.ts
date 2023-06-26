import {ReactNode} from 'react'

declare module 'lodash' {
  export interface LayoutProps {
    children: ReactNode
  }
  export interface PostBtnProps {
    onClick: () => void
    text: string
  }
  export interface PostStateTypes {
    userEmail: string
    userNickName: string
    postTitle: string
    postContent: string
    postImages: string[unknown | string]
  }
}
