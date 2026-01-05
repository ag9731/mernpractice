import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../features/productSlice';

const Products = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[dispatch])
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;
  return (
    <>
      <div>
            <p>{products?.message}</p>  {/* <-- display the message from backend */}
        </div>
    </>
  )
}

export default Products