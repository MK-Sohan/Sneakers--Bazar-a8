import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {handleAddtoCart,product}=props
    const {id,balance,picture,name,company}=props.product;
    return (
        <div className='Product-container'>
            <img src={picture} alt="" />
            <div className="product-info">
            <h3>Name:{name}</h3> 
           <h4>Price:{balance}</h4> 
           <p>Brand:{company}</p>
           
            </div>
            <button onClick={()=>handleAddtoCart(product)} className='btn'>Add to Cart
          <FontAwesomeIcon className='font' icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;