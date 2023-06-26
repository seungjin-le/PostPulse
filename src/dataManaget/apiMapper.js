const api = 'http://localhost:4000'
export const EndPoint = {
  GET_POSTS: `${api}/posts`,
  GET_DETAIL_POSTS: `${api}/posts/:id`,
  POST_POST: `${api}/posts`,
  PUT_POST: `${api}/posts/:id`,
  DELETE_POST: `${api}/posts/:id`,
}
const ApiMapper = {
  get: {
    [EndPoint.GET_POSTS]: {},
    [EndPoint.GET_DETAIL_POSTS]: {},
  },
  put: {
    [EndPoint.PUT_POST]: {},
  },
  post: {
    [EndPoint.POST_POST]: {},
  },
  patch: {},
  delete: {
    [EndPoint.DELETE_POST]: {},
  },
}
export default ApiMapper
