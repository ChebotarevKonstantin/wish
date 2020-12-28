import { LOGIN_USER, REG_USER, LOGOUT_USER, UPDATE_USER } from '../actionTypes'

const defaultState = {
  currentUser: {},
  isAuth: false,
}

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case REG_USER:
      const regUser = {
        currentUser: action.payload,
        isAuth: action.payload.isAuth
      }

      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(regUser))

      return { ...state, ...regUser }

    //  return { ...state, currentUser: action.payload, isAuth: action.payload.isAuth}
    case LOGIN_USER:
      const logUser = {
        currentUser: action.payload,
        isAuth: action.payload.isAuth
      }
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(logUser))

      return { ...state, ...logUser }
    case LOGOUT_USER:
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      return { ...state, currentUser: {}, isAuth: false }

      case UPDATE_USER:
      const updUser = {
        currentUser: action.payload,
        isAuth: action.payload.isAuth
      }

      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify(updUser))

      return { ...state, ...updUser }

    default:
      return state
  }
}


