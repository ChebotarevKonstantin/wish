import { React, useEffect, useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRegAC } from "../../redux/actionCreatorsUser";


//модалка регистрации
function SignupModal({ show, setShow }) {
  const dispatch = useDispatch();
  const resultSignup = useSelector(store => store.user)
  const [state, setState] = useState('')

  const subReg = (e) => {
    e.preventDefault();
    const {
      login: {
        value: login
      },
      password: {
        value: password
      },
      email: {
        value: email
      }
    } = e.target
    dispatch(fetchUserRegAC({ login, password, email }))
    }
  useEffect(() => {
    !resultSignup.currentUser.success ? setState(resultSignup.currentUser.message) :
      setShow(false)
  }, [resultSignup])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          {state && <div class="alert alert-danger" role="alert">{state}</div>}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={subReg}>

            <Form.Group controlId="formBasicText">
              <Form.Label>Логин</Form.Label>
              <Form.Control name="login" type="text" placeholder="Придумайте и введите логин" />
              <Form.Text className="text-muted">
                Мы уважаем право на сохранность личных данных и поэтому не собираем и не передаем
                информацию о Вас третьим лицам.
                            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Введите адрес Вашей эектронной почты" />
              <Form.Text className="text-muted">
                {/*Мы уважаем право на сохранность личных данных и поэтому не собираем и не передаем*/}
                {/*информацию о Вас третьим лицам.*/}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control name="password" type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button variant="success" type="submit">
              Зарегистрироваться
                        </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
                        </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default SignupModal
