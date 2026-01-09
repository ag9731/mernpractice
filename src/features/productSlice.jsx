import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/Axios";


export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async  (_,thunkAPI) =>{
        const response = await api.get("/products");
        return response.data.allProducts;
    }
)

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async ( data, thunkAPI ) => {
        const response = await api.post("/products/create",data);
        return response.data;
    }
)

const initialState = {
    products:null,
    loading:true,
    error:false
}

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
         clearAuthState(state){
           state.products= null;
           state.loading = false;
           state.error = null;
       },
    },
    extraReducers : (builder) =>{
        builder
        .addCase(fetchAllProducts.pending,(state)=>{
            state.loading = true,
            state.products = null
        })
        .addCase(fetchAllProducts.fulfilled,(state,action) => {
            state.loading = false,
            state.error = false,
            state.products = action.payload
        })
        .addCase(fetchAllProducts.rejected,(state,action) => {
            state.loading = false,
            state.error = action.payload
        })
        // Create Product
        .addCase(createProduct.pending,(state)=>{
            state.loading = false,
            state.products = null
        })
        .addCase(createProduct.fulfilled,(state,action) => {
            state.loading = false,
            state.error = false,
            state.products = action.payload
        })
        .addCase(createProduct.rejected,(state)=>{
            state.loading = false,
            state.error = action.payload
        })
    }
})

export default productsSlice.reducer;