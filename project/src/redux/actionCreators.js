import { GET_IDEAS, ADD_IDEA} from './actionTypes'
import {GET_WISH_LIST} from './actionTypes'
import {ADD_WISH_LIST} from './actionTypes'
import {DELETE_WISH_LIST} from './actionTypes'
export const fetchGetIdeasAC = () => {
  return dispatch => {
    fetch('/getgoods')
      .then(res => res.json())
      .then(ideas => dispatch(getIdeasAC(ideas)))
  }
};

export const fetchPostIdeaAC = (payload) => {
  return dispatch => {
    fetch('/addidea', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(idea => dispatch(addIdeasAC(idea)))
  }
}
//
export const fetchGetWishListAC = (payload) => {
  return dispatch => {
    fetch(`/wishlists/?id=${payload}`,{
      method: 'GET',
          headers: {
      'Content-type': 'application/json'
    },
    // body: JSON.stringify(payload)
  })
        .then(res => res.json())
        .then(wishlists => dispatch(getWishListAC(wishlists)))
  }
};





export const addListWishAC = (payload) => ({
  type: ADD_WISH_LIST,
      payload

})
export const deleteWishListAC = (payload) => ({
  type: DELETE_WISH_LIST,
  payload

})

export const getIdeasAC = (payload) => ({
  type: GET_IDEAS,
  payload
});

export const addIdeasAC = (payload) => ({
  type: ADD_IDEA,
  payload
});

export const getWishListAC = (payload) => ({
  type: GET_WISH_LIST,
  payload

});
export const getWishListUpdateAC = () => ({
  type: DELETE_WISH_LIST
})

// export const fetchGetWishListAC = () => {
//   return dispatch => {
//     fetch("/login")
//         .then(res => res.json())
//         .then(wishlists => dispatch(getWishListAC(wishlists)))
//   }
// };

