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
    postImages: string[unknown | string | null]
    postTags: string[]
  }
  export interface PostsStateTypes {
    posts: [] | PostStateTypes[]
  }
  export interface TitleTextProps {
    title: string
    level: string
  }
  export interface UserTypes {
    platform: string
    name: string
    email: string
    picture: string
    sub?: string
    iat?: number
    exp?: number
    jti?: string
  }
}
