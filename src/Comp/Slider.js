import React, {useState} from 'react'
import Slide from './Slide'
import {Sale} from './Aarray'



const Slider = () => {
const [value, setValue]=useState('translate(0)');
const [flag, setFlag]=useState('hj')
  const myStyle={
    transform:value
  }
  const clickLeft=()=>{
    console.log(flag)
    setFlag(7);
    console.log(flag)
    }

  const clickRight=()=>{
    console.log(flag)
    if(flag<4){
    setFlag(flag+1)
    console.log(flag+'right click')
  }else{
    console.log('just right')
  }}
  return (
    <div className='slider' >
      <span class="material-symbols-outlined naval" onClick={clickLeft} >
chevron_left
</span>
<div className='slide-wrapper' style={myStyle}>
{Sale.map((item)=>(
        <div className="slide">
        <div className="img-cont">
            <img className='slideimg' src={item.img} key={item.src} alt="" />
        </div>
        <div className="info-cont">
            <h3>{item.sale} Sale</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, iure?</p>
            <button>Shop Now</button>
        </div>
    </div>
      ))}
   </div>
<span class="material-symbols-outlined navar" onClick={clickRight} >
chevron_right
</span>
    </div>
  )
}

export default Slider
