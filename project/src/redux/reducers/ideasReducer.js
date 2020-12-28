import { GET_IDEAS, ADD_IDEA } from '../actionTypes'

export function ideasReducer(state=[], action) {
  switch (action.type) {
    case GET_IDEAS:
      return [ ...action.payload]
    case ADD_IDEA:
      return [...state, action.payload]
    default:
      return state
  }
}

