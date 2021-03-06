import React from 'react'
import './ProductList.css'

const ProductList = (props) => {
    return (
        <section className="product-list">
            <h2>ProductList</h2>
            <ul>
                {props.products.map((item) => (
                    <li key={item.id} onClick={props.onRemoveItem.bind(this, item.id)}>
                        <span>{item.title} </span>
                        <span> x {item.amount}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProductList
