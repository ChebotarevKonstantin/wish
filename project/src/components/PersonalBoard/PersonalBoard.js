import { useEffect, useState } from 'react'
import {Row,Col } from 'react-bootstrap'
import Informer from '../Informer/Informer'
import style from './PersonalBoard.module.css'
import SendAvatar from './SendAvatar/SendAvatar'
import { useSelector } from 'react-redux';

export default function PersonalBoard({count, setCount}) {
  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '' } }, isAuth: false })
  // const [count, setCount] = useState(0)
  const {wishlists} =  useSelector(store => store)
  useEffect(() => {
    const user = localStorage.getItem('user')
      user && setLogUser(JSON.parse(user))
  }, [count])
  return (
    <div >
      <Row className={style.row}>
       
        <Col md={3}>
          <h3>Привет, {userLog.currentUser.user.login}!</h3>
          <img className={style.ava} src={userLog.currentUser.user.avatar}
          alt="avatar"

          />
        </Col>
        <Col>
          <h2>Личный кабинет</h2>
              <ul>
               Все списки {wishlists && wishlists.map(el => 
                <li ><a href={`#${el.titleWish}`} className={style.li} >{el.titleWish}</a></li>
                
                )}
              </ul>

        </Col>
        <Col className={style.informer}>
        <Informer/>
        </Col>
      </Row>
      <Row>
        <SendAvatar currUser={userLog.currentUser.user} count={count} setCount={setCount}/>
      </Row>
    </div>
  )
}
