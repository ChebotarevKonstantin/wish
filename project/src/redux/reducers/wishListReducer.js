import { GET_WISH_LIST,  ADD_WISH_LIST, DELETE_WISH_LIST, GET_LAST_LIST } from '../actionTypes'
import {fetchGetWishListAC} from "../actionCreators";

export function wishListReducer(state=[], action) {

    switch (action.type) {
        // case GET_LAST_LIST:
        //     return []
        case GET_WISH_LIST:
            return [...action.payload]
        // case ADD_WISH_LIST:
        //     return [...state, action.payload]
        default:
            return state
    }
}
