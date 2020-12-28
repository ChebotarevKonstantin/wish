import React, { useEffect, useState, useRef } from 'react';
import Categories from '../Categoties/Categories';
import style from './Search.module.css'

function Search({ dispatch, ideas, res, setRes }) {
  const inp = useRef()
  useEffect(() => { inp.current.focus() }, [])

  const [stateInput, setStateInput] = useState('')

  // const [res, setRes] = useState(null)

  const clickHandler = () => {
    setStateInput(() => "")
  }

  useEffect(() => {
    setRes(() => ideas.filter(obj => {
      let showGood = false;
      let keysArr = Object.keys(obj);
      keysArr.forEach(key => {
         if (typeof obj[key] == 'string' && key !== 'img') {
          if (obj[key].toLowerCase().includes(stateInput.toLowerCase())) {
            showGood = true
          }
        } else if (Array.isArray(obj[key])) {

          if (obj[key].find(item => item.toLowerCase().includes(stateInput.toLowerCase()))) {
            showGood = true
          }
        }
      })
      return showGood
    }))
  }, [stateInput])

  return (
    <div>
      <div className={style.input} >
      <input className='form-control' ref={inp} onChange={(e) => {
        setStateInput(e.target.value)
      }} value={stateInput} placeholder='Найти' />
      {stateInput ? <button className={`btn btn-primary mb-2 ${style.button}`} onClick={clickHandler} >Очистить</button> : null}
    </div>
    <div>
      <Categories res={res} ideas={ideas}/>
    </div>
    </div>
  );
}

export default Search;
