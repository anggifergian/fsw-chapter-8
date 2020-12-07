import * as actions from '../actions/postsActions'

export const initialState = {
  posts: [],
  loading: false,
  isErrors: false,
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true }
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, isErrors: false }
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, isErrors: true }
    default:
      return state
  }
}
