import React from 'react';
import Category from './Category/Category';

function Categories({ideas, res}) {
  const unuqTag = [...new Set([].concat.apply([], res.map((item)=> item.tag)))]


  return (
    <div>
       {ideas ? unuqTag && unuqTag.map((tag) => <Category key={Math.random()} tag={tag}  unuqTag={unuqTag}/>) : null}
      {/* {ideas ? <hr></hr>: null} */}
    </div>
  );
}

export default Categories;
