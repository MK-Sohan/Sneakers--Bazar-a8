import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    console.log(cart);
    // console.log(cart);
 
    return (
        <div>
            {
                cart.map(item=><h1>Name:{item.name}</h1>)
            }
            
            <button className='btn1'>Choose One For Me</button> <br />
            <button className='btn2'>Choose Again</button>
        </div>
    );
};

export default Cart;