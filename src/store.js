import { configureStore, Tuple } from '@reduxjs/toolkit'
import productReducer from "../src/features/productSlice"

const store =  configureStore({
  reducer: {
     products: productReducer,
  }
})
export default store;