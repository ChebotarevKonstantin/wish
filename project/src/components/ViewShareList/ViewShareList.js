import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import IdeaCard from '../IdeaCard/IdeaCard'

import "./carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


function ViewShareList() {

    const {id, user} = useParams()
    const [state, setState] = useState()
    useEffect(() =>

            fetch(`/share/?id=${id}&user=${user}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(info => setState(info))


        , []
    )

    return (
        <>
            <Container>
                <div style={{marginTop: '5%'}}>
                    <h1> Список
                        желаний: {state && state.goods[0].titleWish}</h1> <h2>Пользователь</h2> <h1>{state && state.userNickname[0].login}</h1>

                    хочет получить в подарок что-то из этого:
                    <br></br>

                    <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} emulateTouch={true}
                              showThumbs={true}>
                        {state && state.originList.map(el => <div><IdeaCard key={el._id} idea={el}/></div>)}

                    </Carousel>

                </div>
            </Container>
        </>
    )


}

export default ViewShareList