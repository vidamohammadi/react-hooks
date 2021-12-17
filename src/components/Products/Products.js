import React, { useState , useCallback} from 'react'
import Search from '../Search/Search'
import ProductForm from '../ProductForm/ProductForm'
import ProductList from '../ProductList/ProductList'

const Products = (props) => {
    const [products, setProducts] = useState([])

    const searchProductHandler = useCallback((items) => {
        setProducts(items)
    }, [])

    const addProductHandler = (item) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            response.json()
                .then((responseData) => {

                    setProducts((prevState) => {
                        return [
                            ...prevState, {
                                id: responseData.id,
                                ...item
                            }
                        ]
                    })
                })
        })

    }

    return (
        <div className='App'>
            <ProductForm onAddProduct={addProductHandler} />
            <section>
                <Search onLoadProducts={searchProductHandler}/>
                <ProductList products={products} onRemoveItem={() => { }} />
            </section>
        </div>
    )
}

export default Products
