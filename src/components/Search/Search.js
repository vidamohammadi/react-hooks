import React, { useState, useEffect } from 'react'
import './Search.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import Card from '../UI/Card/Card'

const Search = React.memo((props) => {
    const { onLoadProducts } = props
    const [searchItem, setSearchItem] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            // BackEnd create URL for search and create Query
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    return response.json()
                })
                .then((responseData) => {
                    const loadedProducts = []
                    for (const item in responseData) {
                        loadedProducts.push({
                            id: item,
                            title: responseData[item].id,
                            amount: responseData[item].username
                        })
                    }

                    onLoadProducts(loadedProducts)
                })
        }, 500)
        return() => {
            clearTimeout(timer)
        }
    }, [searchItem, onLoadProducts])

return (
    <section className="search">
        <Card>
            <div>
                <label>Search</label>
                <Input
                    name="input"
                    value={searchItem}
                    onChange={(event) => setSearchItem(event.target.value)}
                />
            </div>
        </Card>
    </section>
)
})

export default Search
