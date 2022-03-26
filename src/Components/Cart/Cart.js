import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,reset,chooseone,random}=props
    console.log(random);
    // console.log(cart);

    return (
        <div>
           
            {
                cart.map(item=><h3>Name:{item.name}</h3>)
            }
            <div className="showchoose">
<img src={random.picture} alt="" />
<h4>Name:{random.name}</h4>
            </div>
            <div className="button">
            <button onClick={chooseone}  className='btn1'>Choose One For Me</button> <br />
            <button onClick={reset} className='btn2'>Choose Again</button>
            </div>
          
        </div>
    );
};

export default Cart;