import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../features/productSlice';
import "./Products.css"

const Products = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[dispatch])
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  const handleQuery = () => {
    console.log()
  }

  return (
    <>
      <div className="main">
            {products.map((product,index)=>{
              return(
                  <div className="parent">
                  <div>
                  <h1 className='bg-dark'>{index + 1}</h1>
                  </div>
                  <div>
                  <h1 className='bg-dark'>{product.productName}</h1>
                  </div>
                  <div>
                  <h1 className='bg-dark'>{product.productDescription}</h1>
                  </div>
                  <div>
                  <h1 className='bg-dark'>{product.productCategory}</h1>
                  </div>
                  <div>
                  <h1 className='bg-dark'>{product.productPrice}</h1>
                  </div>
                  <div>
                    <button className="btn">Add To cart</button>
                  </div>
                  </div>
              )
            })}
        </div>
    </>
  )
}

export default Products