import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
})

console.log('rootReducer: ', rootReducer)

export default rootReducer
