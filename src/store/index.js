import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import single from './single';
import cart from './cart';
export default  configureStore({
    reducer:{
        auth:auth,
        single:single,
        cart:cart
    },
});


