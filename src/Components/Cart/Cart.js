import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,reset,chooseone,random}=props
   let istrue;
   if(cart.length===0){
       istrue=true;
   }
   else{
       istrue=false;
   }

    return (
        <div>
           
            {
                cart.map(item=><h3>Name:{item.name}</h3>)
            }
            <div className="showchoose">
<img src={random.picture} alt="" />
<h1>{random.name}</h1>
            </div>
            <div className="button">
            <button disabled={istrue} onClick={chooseone}  className='btn1'>Choose One For Me</button> <br />
            <button onClick={reset} className='btn2'>Choose Again</button>
            </div>
          
        </div>
    );
};

export default Cart;