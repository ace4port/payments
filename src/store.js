import { configureStore } from '@reduxjs/toolkit'

import PaymentSlice from './features/payment/PaymentSlice'

const store = configureStore({
  reducer: { payment: PaymentSlice },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
