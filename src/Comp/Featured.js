import React from 'react'
import {ProductList} from './Aarray'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Propage from './Propage';

const Featured = () => {
     
  
  return (
    <div className='featured'>
      <h1 className="fhead">
        Featured Products
      </h1>
      <div className="fdivp">
      <div className="fdivc">
      {ProductList.map((item)=>(
            <div className="fe-card">
                <img src={item.src} key={item.src} alt="" className="fe-img" />
                <div className="fe-div">
                    <button >Buy Now</button>
                   
                </div>
            </div>
        ))}
      </div>
    </div></div>
  )
}

export default Featured
