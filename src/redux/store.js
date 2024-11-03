import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// Steps for making it: 
// 1. Create store
// 2. wrap app component under provider
// 3. create Slice
// 4. register reducer in store