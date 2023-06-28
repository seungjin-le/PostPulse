import {atom} from 'recoil'
import {UserTypes} from 'lodash'

const initialState: UserTypes = {
  name: '',
  email: '',
  picture: '',
  sub: '',
}
export const userState = atom({
  key: 'userState',
  default: initialState,
})

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
})
