import React, {useState} from 'react'
import style from './NewYear.module.css'

export default function NewYear({show, setShow}) {
  // const [show, setShow] = useState(false)

  const handleShow = () => setShow(!show);
  let script
if(show){
    script = document.createElement("script")
    script.className = 'ny';
    script.src = "https://uguide.ru/js/script/snowcursor.min.js";
    script.async = true;
    document.body.appendChild(script);

}else{
  if(script){ 
    const rem = document.querySelector(".ny");
    document.body.removeChild(rem)
  }
}
  return (
    <>
    {show ? <div className={style.garland}>
         <div style={{height: '30px', background: 'url(https://uguide.ru/js/script/girlianda_uguide_ru_2.gif) repeat-x 100%'}}></div>
       </div> : console.log(':(')
  
    } <div className={style.btn} onClick={handleShow} >
        <img   className={style.d} src="https://res.cloudinary.com/di5lpqwcp/image/upload/v1608839386/img/e7vkd6sbdkov08gpghgf.png" width='300px' alt=""/>
        </div>
       
    </>
  )
}
