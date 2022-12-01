import React from 'react'

const CatItem = (prop) => {
  return (
    <div className='catitem'>
      <img className='catimg' src={prop.image} alt="" />
      <div className="info">
        <h1 className="cath">{prop.tittle}</h1>
        <button className="catbtn">Explore</button>
      </div>
    </div>
  )
}

export default CatItem
