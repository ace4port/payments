import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import PaymentSlice from './features/payment/PaymentSlice'
import InvoiceSlice from './features/payment/InvoiceSlice'

const reducers = combineReducers({
  payment: PaymentSlice,
  invoice: InvoiceSlice,
})

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
