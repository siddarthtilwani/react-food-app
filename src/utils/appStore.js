import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
const appStore=configureStore({
reducer:{
    carti  :cartReducer,
}
})

export default appStore;