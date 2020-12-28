import React, { useState } from 'react'
import { Col, Dropdown } from 'react-bootstrap'
import Star from './Star/Star'
import style from './IdeaCard.module.css'

export default function IdeaCard({ idea, wishlists, res, setRes, }) {
  const [thisIdea, setThisIdea] = useState(idea)
  const [count, setCount] = useState(0)

  const saveIdea = (e) => {
    e.preventDefault()
    setCount(count + 1)
    const id = e.target.id;

    fetch('/saveidea', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ id, idea })
    })
      .then(res => res.json())

    fetch('/changeRate', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ thisIdea })
    })
      .then(res => res.json())
      .then(updIdea => setThisIdea(() => updIdea))

  }

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={style.heart}
    >
      {children}
      &#x25bc;
    </a>
  ));


  return (
    <>
      <div className={style.card}>
        <Col>

          <div className={style.ideaimg} >
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {<i className="fas fa-heart"></i>}
              </Dropdown.Toggle>

              <Dropdown.Menu >

                {wishlists && wishlists.map(list => <Dropdown.Item eventKey="1" key={list + Math.random()} onClick={saveIdea} id={list._id}>
                  {list.titleWish}
                </Dropdown.Item>
                )}
                {/* <Dropdown.Divider /> */}

              </Dropdown.Menu>

            </Dropdown>

            <img src={idea.img} alt={idea.titleGift} width="220" height='220' />
          </div>

          <div className={style.description}>
            <Star thisIdea={thisIdea} />
            <div className={style.titleGift}>
              {idea.titleGift}
            </div>
          </div>
        </Col>
      </div>
    </>
  )
}
