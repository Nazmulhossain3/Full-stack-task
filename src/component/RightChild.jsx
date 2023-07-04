/* eslint-disable react/prop-types */
import './CSS/RightChild.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const RightChild = ({ product }) => {
  
   useEffect(()=>{
    AOS.init();
   
},[])
   
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='right-child'>
    
    
        <div  className='right-child-item'>
        <h3>Selected Product:</h3>
        <p>ID: {product.id}</p>
        <p>Name: {product.Name}</p>
        <p>Price: {product.Price}</p>
        </div>
      </div>
    );
};

export default RightChild;