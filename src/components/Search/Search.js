import React from 'react'
import './Search.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import Card from '../UI/Card/Card'

const Search = React.memo((props) => {
    return (
        <section className="search">
            <Card>
                <div>
                    <label>Search</label>
                    <Input name="input" />
                </div>
            </Card>
        </section>
    )
})

export default Search
