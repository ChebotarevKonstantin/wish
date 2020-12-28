import { Row } from "react-bootstrap"
import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetWishListAC } from '../../redux/actionCreators'
import AddWishListForm from '../AddWishListForm/AddWishListForm'
import CarouselList from '../CarouselList/CarouselList'

export default function WishLists({ count, setCount }) {
  // const [indepCount, setIndepCount] = useState(0)
  const dispatch = useDispatch()

  const { wishlists } = useSelector(store => store)


  useEffect(() => {
    const userID = (JSON.parse(localStorage.getItem('user')).currentUser.user._id);
    dispatch(fetchGetWishListAC(userID))
  }, [count])
  return (
    <>
      <Row>
        <AddWishListForm count={count} setCount={setCount} />
      </Row>

      {wishlists && wishlists.map((wishlist) =>
        <CarouselList wishlist={wishlist} count={count} setCount={setCount} />
      )}

    </>
  )
}

