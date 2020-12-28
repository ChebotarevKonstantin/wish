import { useParams } from 'react-router-dom'
import IdeaList from '../IdeaList/IdeaList'
import { Container, Row, Col } from 'react-bootstrap'
import NavFilter from '../NavFilter/NavFilter'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchGetIdeasAC } from '../../redux/actionCreators'
import style from './IdeasBoard.module.css'

export default function IdeasBoard() {
  //нужно передать в category категорию на русском
  const { category } = useParams()
  const [category1, setCategory1] = useState('1')
  const dispatch = useDispatch()
  const { ideas } = useSelector(store => store)
  const [res, setRes] = useState(ideas)

  useEffect(() => {
    dispatch(fetchGetIdeasAC())
  }, [])
 
  useEffect(() => {
    setRes(() => ideas)
    }, [ideas])


  useEffect(() => {
    setCategory1(category)
  }, [category])

  return (
    <>
      <Container>
        <Row className={style.row}>
          <Col md={3}>
            <NavFilter dispatch={dispatch} ideas={ideas} res={res} setRes={setRes} category1={category1} setCategory1={setCategory1}/>
          </Col>
          <Col>

           <h1>Подарки {category1}</h1> 
            <IdeaList category={category}  category1={category1} setCategory1={setCategory1} dispatch={dispatch} ideas={ideas} res={res} setRes={setRes} />


          </Col>
        </Row>
      </Container>
    </>
  )
}
