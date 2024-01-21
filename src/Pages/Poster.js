import PosterDisplay from '../Display/ShirtDisplay'
import { PosterList } from '../Component/PosterList'
import "../Style/Sticker.css"
import React from 'react'

function Poster() {
  return (
    <div className='shop'>
      <h1>Cool Posters</h1>
      <div className='shopList'>
        {PosterList.map((ShopPoster) => {
          return <PosterDisplay img={ShopPoster.Image} name={ShopPoster.name} link={ShopPoster.link} price={ShopPoster.price}/>
        })}
      </div>
    </div>
  )
}

export default Poster