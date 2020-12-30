import React from 'react'

const ProductCard = ({title, cost}) => {

    return (
        <div>
            <h3>{title} - {`$${cost}`} <button>ADD TO CART</button></h3>
           
        </div>
    )
}

export default ProductCard
