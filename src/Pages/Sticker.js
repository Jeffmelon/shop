import React from 'react'
import { StickerList } from '../Component/StickerList'

function Sticker() {
  return (
    <div>
      <h1>Cool Stickers</h1>
      <div>
        {StickerList.map((ShopSticker) => {
          
        })}
      </div>
    </div>
  )
}

export default Sticker