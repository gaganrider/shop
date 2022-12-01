import React from 'react'

const Slide = (prop) => {
  return (
    <div className="slide">
        <div className="img-cont">
            <img className='slideimg' src={prop.src} alt="" />
        </div>
        <div className="info-cont">
            <h3>{prop.sale} Sale</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, iure?</p>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Slide
