import { Container, Row } from 'react-bootstrap'
import style from './CategoryList.module.css'
import CategoryCard from '../CategoryCard/CategoryCard'

export default function CategoryList() {
  
  const categories = [
    {"Любимым" : "Любимым",
      img: "https://www.brighterkind.com/sites/default/files/Woodbury%20House-Gingerbread%20image.jpg"},
    {"Семье" : "Семье",
      img: "https://c4.wallpaperflare.com/wallpaper/430/180/62/new-year-cookies-christmas-christmas-wallpaper-preview.jpg"},
    {"Друзьям" : "Друзьям",
      img: "https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY4ODE4ODA4MzY1MDAwNDY1/christmas-gettyimages-184652817.jpg"},
    {"Коллегам" : "Коллегам",
      img: "https://papers.co/wallpaper/papers.co-av77-decoration-holiday-christmas-illustration-art-gold-40-wallpaper.jpg"},
    {"Себе" : "Себе",
      img: "https://api.time.com/wp-content/uploads/2015/12/presents1.jpg?w=600&quality=85"},
    {"Детям" : "Детям",
      img: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/7ucwd-TWSE6PQ8ZPH-Full-Image_GalleryBackground-en-US-1583342948536._RI_.jpg"}
  ]

  return (
     <div className={style.categories}>
        <Container>
          <h2> Категории подарков </h2>
          <p>Кому выбираете подарок?</p>

          <Row>
            {categories && categories.map(el => <div key={el + Math.random()}> <CategoryCard categoryObj={el} /> </div>)}
          </Row>
        </Container>
      </div>
  )
}

