import React from 'react'
import {ProductList} from './Aarray'
import ProCard from './ProCard'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Product = (prop) => {
  return (

    
    <div className='product'>
        <Link to='/cat' >hhhh</Link>
      <h1 className="protittle"> {prop.tittle} </h1>
      <div className="prodiv">
      {ProductList.map((item)=>(
           <ProCard src={item.src} key={item.src} />
        ))}
      </div>
    </div>
  )
}

export default Product
