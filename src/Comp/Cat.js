
import React from 'react'
import CatItem from './CatItem'
import {Category} from './Aarray'
const Cat = () => {
  return (
    <div className='cat'>
        {Category.map((item)=>(
            <CatItem key={item.tittle} image={item.img} tittle={item.tittle}/>
        ))}
      
    </div>
  )
}

export default Cat
