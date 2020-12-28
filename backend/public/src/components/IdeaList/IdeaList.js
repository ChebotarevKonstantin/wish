import { useEffect } from 'react'
import { useSelector } from 'react-redux';

import { Row } from 'react-bootstrap'
import style from './IdeaList.module.css'
import IdeaCard from '../IdeaCard/IdeaCard'
import { fetchGetWishListAC } from '../../redux/actionCreators'

export default function IdeaList({ dispatch, ideas, res, setRes, category }) {
  useEffect(() => {
    setRes(() => ideas.filter(obj => {
      return obj.tag.includes(category)
    }))
  }, [category])

  const { wishlists } = useSelector(store => store)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      const userID = (user.currentUser.user._id);
      dispatch(fetchGetWishListAC(userID))
    }
  }, [])

  return (
    <div className={style.list}>
      <Row>
        {res && res.map(el => <div key={el.id + Math.random()} className={style.card}> <IdeaCard  idea={el} wishlists={wishlists} res={res} setRes={setRes} /> </div>)}
      </Row>
    </div>
  )
}
