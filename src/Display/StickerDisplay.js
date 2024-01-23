import React from 'react'

function StickerDisplay({img, name, link, price}) {
    return (
        <div className='shopItem' onClick={() => window.open(link, "_blank")}>
            <div style={{ backgroundImage: `url(${img})` }} className='bgImage'/>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    )
}

export default StickerDisplay