import React from 'react'
import { fetchProducts } from './../../Redux/product/productActions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { categorizeProducts } from './../../Utility/products';

const Category = ({fetchProducts, categories}) => {
    console.log(categories)
    useEffect(() => {
        console.log('CDM')
        fetchProducts()        
    }, [])
    return (
        <div>
            <h1>Category Page</h1>
        </div>
    )
}
var actions = {
    fetchProducts
}
var mapState = (state) => ({
    categories: categorizeProducts(state.products)
})

export default connect(mapState, actions)(Category)
