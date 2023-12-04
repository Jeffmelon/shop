import React from 'react'

function ShirtDisplay({img, name, link, price}) {
    return (
        <div onClick={() => window.open(link, "_blank")}>
            <div style={{ backgroundImage: {img}}}/>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default ShirtDisplay