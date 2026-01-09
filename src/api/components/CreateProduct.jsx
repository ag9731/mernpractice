import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../features/productSlice';


const CreateProduct = () => {
    const dispatch = useDispatch();
    
    const  { loading,error } = useSelector((state)=>state.products);
    const [productName, setproductName] = useState("");
    const [productDescription,setproductDescription] = useState("");
    const [productCategory, setproductCategory] = useState("");
    const [productPrice, setproductPrice] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {
            productName:productName,
            productDescription:productDescription,
            productCategory:productCategory,
            productPrice:productPrice
        };

        dispatch(createProduct(productData));
        // console.log("hello kskn");
    }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
         <input type="text" placeholder='Enter productName' value={productName} onChange={(e) => setproductName(e.target.value)}/>
         <input type="text" placeholder='Enter productDescription' value={productDescription} onChange={(e)=> setproductDescription(e.target.value)}/> 
         <input type="text" placeholder='Enter productCategory' value={productCategory} onChange={(e)=> setproductCategory(e.target.value)}/>
         <input type="text" placeholder='Enter productPrice' value={productPrice} onChange={(e) => setproductPrice(e.target.value)}/>
         <button type='submit'>Submit Entry</button>
         </form>
      </div>
    </>
  )
}

export default CreateProduct