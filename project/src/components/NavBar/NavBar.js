import React, { useEffect, useState } from "react";
import { Row, Col, Container } from 'react-bootstrap'
import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAC } from "../../redux/actionCreatorsUser";
import style from './NavBar.module.css'
import { NavLink } from "react-router-dom";
import NewYear from "../NewYear/NewYear";


function NavBar({ handleShow }) {

  //функция с модалкой
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUserAC())
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const resultLogin = useSelector(store => store.user)
  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '' } }, isAuth: false })
  const visibleModal = () => {
    setShow(true)
  }
  const signupVisible = () => {
    setShowSignup(true)
  }

  useEffect(() => {
    setLogUser(resultLogin)
  }, [resultLogin]);

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setLogUser(JSON.parse(user))
    };
  }, [])



  return (
    <>
      <nav className={`navbar-expand-lg navbar-light navbar-dark fixed-top ${style.bar}`}>
        <Container>
          {/* <div className="nav-wrapper"> */}

          <Row >
            {/* <ul className="navbar-nav right hide-on-med-and-down"> */}
            <Col md={3} lg={3}>
              <div className={`nav-item ${style.menu}`}  >
                <NavLink className={style.logo} to="/">IWish</NavLink></div>
            </Col>

            <Col className={style.div} md={{ offset: 4 }} lg={{ offset: 4 }}>

              <div className="nav-item">
                <NavLink className={`nav-link ${style.menu}`} to="/ideas/Все%20категории">Все идеи</NavLink></div>
              {!userLog.isAuth && <div className="nav-item">
                <NavLink className={`nav-link ${style.menu}`} to="/" onClick={signupVisible}>Регистрация</NavLink></div>}
              <SignupModal setShow={setShowSignup} show={showSignup} />
              {!userLog.isAuth && <div className="nav-item">
                <NavLink className={`nav-link ${style.menu}`} to="/" onClick={visibleModal}>Войти</NavLink></div>}
              <LoginModal setShow={setShow} show={show} />
              {userLog.isAuth && <div className="nav-item">
                <NavLink className={`nav-link ${style.menu}`} to="/dashboard" >{userLog.currentUser.user.login}</NavLink></div>}
              {userLog.isAuth && <div className="nav-item">
                <NavLink className={`nav-link ${style.menu}`} to="/" onClick={logout}>Выйти</NavLink></div>}
              <img className={style.d} src="https://cdn.icon-icons.com/icons2/964/PNG/128/christmas_tree_ball_icon-icons.com_74635.png" onClick={handleShow} width='50px' alt="" />

            </Col>
            {/* </ul> */}
          </Row>
          <Row>
          </Row>
          {/* </div> */}
        </Container>
        {/* <div className={style.garland}>
          <div style={{height: '30px', background: 'url(https://uguide.ru/js/script/girlianda_uguide_ru_2.gif) repeat-x 100%'}}></div>
        </div> */}

      </nav>

    </>
  )

}

export default NavBar;
