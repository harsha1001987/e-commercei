import React from 'react'

function product(name,image,description,price) {
  return (
    <div>
      <div>
        <image src= {image} alt = {name}/>
      </div>
      <div>
        <h1>
            {name}
        </h1>
        <h1>{price}</h1>
      </div>
    </div>
  )
}

export default product
