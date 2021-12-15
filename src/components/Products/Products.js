import React, { useState , useEffect} from 'react'
import Search from '../Search/Search'
import ProductForm from '../ProductForm/ProductForm'
import ProductList from '../ProductList/ProductList'

const Products = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((responseData) => {
            const loadedProducts = []
            
            for(const item in responseData){
                loadedProducts.push({
                    id: item,
                    title: responseData[item].id,
                    amount: responseData[item].username
                })
            }

            setProducts(loadedProducts)
        })
    },[])

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
                <Search />
                <ProductList products={products} onRemoveItem={() => { }} />
            </section>
        </div>
    )
}

export default Products
