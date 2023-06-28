import create from 'zustand'
import {PostStateTypes} from 'lodash'

type PostsState = {
  posts: PostStateTypes[] | []
  setPosts: (posts: any) => void
}

const usePostStore = create<PostsState>(set => ({
  posts: [],
  setPosts: posts => set({posts}),
}))

export default usePostStore
