import React from 'react'

function StickerDisplay({img, name, link, price}) {
    return (
        <div onClick={() => window.open(link, "_blank")}>
            <div style={{ backgroundImage: `url(${img})`}}/>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default StickerDisplay