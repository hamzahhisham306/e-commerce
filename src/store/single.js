import { createSlice } from '@reduxjs/toolkit';

const single = createSlice({
   name:'single',
   initialState:{
    imgUrl:'',
    description:'',
    price:'',
    brandName:''
   },
   reducers:{
     setSingle(state,action){
      state.brandName=action.payload.brandName;
      state.description=action.payload.name;
      state.imgUrl=action.payload.imageUrl;
      state.price=action.payload.price;
    },
    removeSingle(state){
        state.brandName='';
        state.description='';
        state.imgUrl='';
        state.price='';
        state.name=''; 
   }
   }
});

export  const statesingle=(state)=>state.single;
export const {setSingle, removeSingle}=single.actions;
export default single.reducer;
