import React from 'react'
import Search from '../Search/Search'
import ProductForm from '../ProductForm/ProductForm'

const Products = (props) => {
    return (
        <div className='App'>
            <ProductForm />
            <section>
                <Search />
            </section>
        </div>
    )
}

export default Products
