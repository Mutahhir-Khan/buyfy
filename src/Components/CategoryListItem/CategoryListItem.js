import React from 'react'
import ProductCard from './../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const CategoryListItem = ({category, products}) => {
    return (
        <div>
            <h1> {category} </h1>
            {products.map((product) => <ProductCard key={product.title} {...product}/>)}
            <Link to={`category-products/${category}`}>
                <button>VIEW MORE</button>
            </Link> <br></br>   
            -----------------------------------------

        </div>
    )
}

export default CategoryListItem
