import React from 'react'
import './ProductForm.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import Card from '../UI/Card/Card'

const ProductForm = React.memo((props) => {
    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <section className="product-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className='form-control'>
                        <label htmlFor='title'>Title</label>
                        <Input name="input" id="title"/>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='amount'>Amount</label>
                        <Input name="input" id="amount"/>
                    </div>
                    <div className='product-form__actions'>
                        <Button type='submit' value="Submit"></Button>
                    </div>
                </form>
            </Card>
        </section>
    )
})

export default ProductForm
