import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shope.css'

const Shope = () => {
    const [products,setProducts]=useState([]);
     const [cart,setProduct]=useState([])


    useEffect(()=>{
        fetch('Alldata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddtoCart=(product)=>{
        const newCart=[...cart,product]
        setProduct(newCart);
    }
    return (
       
        <div className='shope-container'>
              <div className="left-side">
                 {
                     products.map(product=><Product handleAddtoCart={handleAddtoCart}  key={product.id} product={product}></Product>)
                 }
                  </div>   
            <div className="right-side">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shope;