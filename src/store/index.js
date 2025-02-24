import { configureStore } from '@reduxjs/toolkit';

import mainReducer from '../reducers';



 const store = configureStore({
    reducer: mainReducer,
  
    devTools: true,
});

export default store;
