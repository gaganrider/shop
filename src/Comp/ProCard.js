import React from 'react'

const ProCard = (item) => {
  return (
    <div className="procard">
    <img src={item.src} alt="" className="proimg" />
    <div className="procardbottom">
        <button>Buy Now</button>
        <h4>6$</h4>
    </div>
</div>
  )
}

export default ProCard
