import React,{ useCallback , useReducer } from 'react'
import Search from '../Search/Search'
import ProductForm from '../ProductForm/ProductForm'
import ProductList from '../ProductList/ProductList'

const productReducer = (state , action) => {
    switch(action.type){
        case 'SET':
            return action.products
        case 'ADD':
            return [...state , action.product]
        default:
            throw new Error('Error')
    }
}

const Products = (props) => {

    //const [products, setProducts] = useState([])
    const [products, dispath ] = useReducer(productReducer , [])

    const searchProductHandler = useCallback((items) => {

        //setProducts(items)
        dispath({type: 'SET' , products: items})

    }, [])

    const addProductHandler = (item) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            response.json()
                .then((responseData) => {

                    dispath({
                        type: 'ADD' , 
                        product:{
                            id: responseData.id, 
                            ...item
                        }
                    })
                    // setProducts((prevState) => {
                    //     return [
                    //         ...prevState, {
                    //             id: responseData.id,
                    //             ...item
                    //         }
                    //     ]
                    // })
                    
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
