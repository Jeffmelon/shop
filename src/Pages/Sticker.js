import React from 'react'
import { StickerList } from '../Component/StickerList'
import StickerDisplay from '../Display/StickerDisplay'
import "../Style/Sticker.css"
function Sticker() {
  return (
    <div className='shop'>
      <h1>Cool Stickers</h1>
      <div className='shopList'>
        {StickerList.map((ShopSticker) => {
          return <StickerDisplay img={ShopSticker.Image} name={ShopSticker.name} link={ShopSticker.link} price={ShopSticker.price}/>
        })}
      </div>
    </div>
  )
}

export default Sticker