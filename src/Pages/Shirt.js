import React from 'react'
import ShirtDisplay from '../Display/ShirtDisplay'
import { ShirtList } from '../Component/ShirtList'

function Shirt() {
  return (
    <div className='shop'>
      <h1>Nice Shirts</h1>
      <div className='shopList'>
        {ShirtList.map((ShopShirt) => {
          return <ShirtDisplay img={ShopShirt.Image} name={ShopShirt.name} link={ShopShirt.link} price={ShopShirt.price}/>
        })}
      </div>
    </div>
  )
}

export default Shirt