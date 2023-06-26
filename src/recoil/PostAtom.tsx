import {atom} from 'recoil'
import {PostStateTypes} from 'lodash'

export const postState = atom<PostStateTypes>({
  key: 'postState',
  default: {
    userEmail: '',
    userNickName: '',
    postTitle: '',
    postContent: '',
    postImages: [],
    postTags: [],
  },
})
