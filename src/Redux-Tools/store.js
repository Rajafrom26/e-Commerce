import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import productDetailSlice from "./ProductDetailSlice";
import CartSlice from "./CartSlice";


const store = configureStore({
    reducer: {
        products: ProductSlice,
        productDetail: productDetailSlice,
        cart : CartSlice
    },
});


export default store;
