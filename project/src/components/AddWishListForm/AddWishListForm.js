import {useDispatch} from 'react-redux';
import { useState} from "react";
import React from "react";
import style from "./AddWishListForm.module.css"
import { Col } from 'react-bootstrap'

function AddWishListForm({count, setCount}) {

    const userID = (JSON.parse(localStorage.getItem('user')).currentUser.user._id);

    const [inputText, setInputText] = useState(null)

    const dispatchAdd = useDispatch()
    const addWishList = (e) => {
        e.preventDefault()
        setCount(count + 1)
        fetch('/wishlists', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },

            body: JSON.stringify({inputText: inputText,  userID: userID})
        })
            .then(res => res.json())
            // .then(setIndepCount(indepCount + 1))
        e.target.wishListName.value = ''

    }

    return (

        <>
          <Col  className={style.form} md={{ span: 6, offset: 3 }}>
        
              <form  onSubmit={addWishList}>
                  < input className={style.input} type="text"
                          name="wishListName"
                          placeholder="Введите имя нового списка желаний"
                          onChange={(e) => setInputText(e.target.value)}
                          required/>
                  <button className={style.button} type="submit">Добавить список</button>

              </form>
           
          </Col>
        </>

    )
}

export default AddWishListForm
