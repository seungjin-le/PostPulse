import {atom, selectorFamily} from 'recoil'
import {PostStateTypes} from 'lodash'

export const postState = atom<PostStateTypes>({
  key: 'postState',
  default: {
    userEmail: '',
    userNickName: '',
    postTitle: '',
    postContent: '',
    postImages: [],
  },
})
export const createdPost = selectorFamily({
  key: 'createdPost',
  get:
    post =>
    async ({get}) => {
      console.log(post, get)
    },
  //   const json = JSON.stringify({
  //     userEmail: 'dltmdwls@sdfj;asjf.com',
  //     userNickName: 'Bibibibg',
  //     postTitle: post.postTitle,
  //     postContent: content,
  //     postImages: uploadedImages,
  //   })
  //   createdData(EndPoint.POST_POST, json)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // },
})
