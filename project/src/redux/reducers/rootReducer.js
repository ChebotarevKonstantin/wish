import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { ideasReducer } from './ideasReducer';
import {wishListReducer} from './wishListReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  ideas: ideasReducer,
  wishlists: wishListReducer,
})
