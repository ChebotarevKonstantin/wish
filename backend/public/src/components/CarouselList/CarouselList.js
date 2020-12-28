import IdeaCard from '../IdeaCard/IdeaCard'
import style from './CarouselList.module.css'
import { Col } from "react-bootstrap"
import ButtonDeleteList from "../ButtonDeleteList/ButtonDeleteList";
import ShareList from '../ShareList/ShareList'
import "./carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from "react";

export default function CarouselList({ wishlist, count, setCount }) {

  return (
    <>
      {/* <div className={style.carousel}> */}
      <a name={wishlist.titleWish}></a>

      <div className={style.carousel} key={Math.random()}>
        <Col md={7} >
          <p>{wishlist.titleWish}</p>
        </Col>
        <Col md={{ offset: 3, span: 2 }} >
          <ShareList id={wishlist._id} user={wishlist.user} title={wishlist.titleWish} />
          <ButtonDeleteList id={wishlist._id} count={count} setCount={setCount} />
        </Col>

      </div>
      {/* </div> */}
      <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} emulateTouch={true} showThumbs={true} >

        {wishlist.gifts && wishlist.gifts.map(idea =>
          < IdeaCard idea={idea} key={Math.random()} />

        )}
      </Carousel> 
      <hr />


    </>
  )

}
