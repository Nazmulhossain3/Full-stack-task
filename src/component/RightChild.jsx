/* eslint-disable react/prop-types */
// import './CSS/RightChild.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const RightChild = ({ product }) => {
  
   useEffect(()=>{
    AOS.init();
   
},[])
   
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='right-child ms-5 mt-5 border h-75 rounded'>
    
    
        <div  className='right-child-item text-white mt-5 p-3 shadow-lg'>
        <h3 className='text-primary'>Selected Product:</h3>
        <p>ID: {product.id}</p>
        <p>Name: {product.Name}</p>
        <p>Price: {product.Price}</p>
        </div>
      </div>
    );
};

export default RightChild;