import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import Quesans from '../Question/Quesans';
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
        const newCart=[...cart,product]
        setProduct(newCart);
        
    }
    const reset=()=>{
        setProduct([]);
         
        
    }
    

const chooseone=()=>{
    const random=Math.floor(Math.random()*cart.length)
    setRandom(cart[random])
    reset()
     
         

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