import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    start: 0,
    cartOrders: []
  },
  reducers: {
    increase(state) {
      state.start += 1
    },
    decrease(state) {
      state.start -= 1
    },
    setOrders(state, action) {
       const check = state.cartOrders.find(item=>item?.name===action.payload.name);
       if(check){
        const index = state.cartOrders.findIndex(item=>item?.name===action.payload.name);
        state.cartOrders[index].nums+=1;
       }
       else{
        state.cartOrders.push({
          id:action.payload.id,
          name:action.payload.name,
          nums:1,
          salary:action.payload.salary,
          imageUrl:action.payload.imageUrl
        });
       }
    },
    increaseOrder(state, action){
      const index = state.cartOrders.findIndex((item)=>item?.name===action.payload.name);
      state.cartOrders[index].nums-=1;
    },
    setEmptyArray(state){
      state.cartOrders=[];
      state.start=0;
    }
  }
});

export const statecart = (state) => state.cart;
export const { increase, decrease, setOrders ,increaseOrder ,setEmptyArray} = cart.actions;
export default cart.reducer;
