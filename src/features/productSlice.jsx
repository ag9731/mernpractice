import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/Axios";


export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async  (_,thunkAPI) =>{
        const response = await api.get("/products");
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
    }
})

export default productsSlice.reducer;