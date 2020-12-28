import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function CategoryCard({ categoryObj }) {
  const categoryRoute = Object.keys(categoryObj)[0]
  const category = categoryObj[categoryRoute]
  return (
    <div >
      <Col>
        <Link to={'/ideas/' + categoryRoute}>
          <Card  
            style={{ width: '20rem' , height: '20rem', color: 'white', marginBottom: '1rem'}}
          >
            <Card.Img  style={{ width: '20rem',height: '20rem', objectFit: 'cover' }} src={categoryObj.img} />
            <Card.ImgOverlay style={{ padding: '7rem 0'}}>
               <div style={{ width: '20rem' , height: '7rem', backgroundColor: 'rgba(182, 184, 159, .8)' }}>
                 {category}
                 </div>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Col>
    </div>
  )
}
