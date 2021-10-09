import * as api from './PaymentApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: false,
  success: false,
  invoice: [],
  msg: '',
}

export const payWithCard = createAsyncThunk(
  'payment/payWithCard',
  async (data) => {
    console.log('Here')
    return await api.payWithCard(data)
  }
)

export const payWithGofaaa = createAsyncThunk(
  'payment/payWithGofaaa',
  async (data) => {
    return await api.payWithGofaaa(data)
  }
)

const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    init: (state) => {
      state = { ...initialState, invoice: state.invoice }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(payWithCard.pending, (state) => {
        state.isLoading = true
      })
      .addCase(payWithCard.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.msg = action.payload.data
      })
      .addCase(payWithCard.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
        state.msg = action.payload.data
      })

      .addCase(payWithGofaaa.pending, (state) => {
        state.isLoading = true
      })
      .addCase(payWithGofaaa.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.msg = action.payload.data
      })
      .addCase(payWithGofaaa.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
        state.msg = action.payload.data
      })
  },
})

export const { init } = PaymentSlice.actions

// export const calendarList = (state) => state.calendar.calendars
// export const calendarLoading = (state) => state.calendar.isLoading
// export const calendarSelected = (state) => state.calendar.selected

export default PaymentSlice.reducer
