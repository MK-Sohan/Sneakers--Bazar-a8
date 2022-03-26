import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';

import './Shope.css'

const Shope = () => {
    const [products,setProducts]=useState([]);
     const [cart,setProduct]=useState([])
     const [random,setRandom]=useState([])


    useEffect(()=>{
        fetch('Alldata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddtoCart=(product)=>{
        const exist=cart.find(pd=>pd.id===product.id)
        if(exist){
            alert('You')
            return;
        }
        const newCart=[...cart,product]
        setProduct(newCart);
        setRandom([])
        
    }
    const reset=()=>{
        
        setProduct([])
        setRandom([])
    }
    

const chooseone=()=>{
    const random=Math.floor(Math.random()*cart.length)
    setRandom(cart[random])
    setProduct([]);
     
         

}

    return (
       
        <div className='shope-container'>
              <div className="left-side">
                 {
                     products.map(product=><Product handleAddtoCart={handleAddtoCart}  key={product.id} product={product}></Product>)
                 }
                  </div>  
             
            <div className="right-side">
                <Cart cart={cart}  random={random} reset={reset}chooseone={chooseone}></Cart>
            </div>
            
        </div>
    );
};

export default Shope;