import React from 'react'
import { Col, Accordion, Card } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { fetchUserUpdAC } from "../../../redux/actionCreatorsUser";

export default function SendAvatar({ currUser, setCount, count }) {
  const id = currUser._id
  const dispatch = useDispatch()

  const sendFoto = async (e) => {
    e.preventDefault()
    const { file: { files }, method } = e.target
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'iwish_img')
    fetch('https://api.cloudinary.com/v1_1/di5lpqwcp/image/upload', {
      method,
      body: data
    })
      .then(res => res.json())
      .then(avatar => avatar.url)
      .then(avatar => dispatch(fetchUserUpdAC({ id, avatar })))
      .then(setCount(count + 1))

  }

  return (
    <>
      <Col md={6}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" >
              Загрузить фото {<i class="fas fa-arrow-down"></i>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <form encType="multipart/form-data" method="POST" onSubmit={sendFoto} name="fileinfo">
                  <div style={{ display: 'flex' }}>
                    <input type='file' name='file' id="file" />
                    <button>Загрузить</button>
                  </div>
                </form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </>
  )
}

