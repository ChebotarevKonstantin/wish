import React from 'react';
import { Link } from 'react-router-dom';
import style from './Category.module.css'

function Category({tag}) {
  return (
    <div>
        <Link className={style.link} to={`/ideas/${tag}`}>{tag}</Link>
      {/* <span >{tag}</span> */}
    </div>
  );
}

export default Category;
