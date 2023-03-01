import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
   name:'auth',
   initialState:{
    isLogin:false,
    showModal:false,
    showForm:false
   },
   reducers:{
     setLogin(state){
      state.isLogin=true
    },
    setLogout(state){
        state.isLogin=false
    },
    setShow(state){
      state.showModal=true
    },
    setClose(state){
      state.showModal=false
    },
    setShowForm(state){
      state.showForm=true
    },
    setHiddenForm(state){
      state.showForm=false
    }
   }
});

export  const stateAuth=(state)=>state.auth;
export const {setLogin, setLogout, setShow, setClose, setShowForm, setHiddenForm}=auth.actions;
export default auth.reducer;
