import * as api from './PaymentApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: false,
  mg: '',
  invoice: null,
  paymentSuccess: true,
}
//error message dekhaune
export const getInvoice = createAsyncThunk('payment/getInvoice', async () => {
  return await api.getInvoices()
})
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
      state = initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoice.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getInvoice.fulfilled, (state, action) => {
        state.invoice = { ...action.payload.data }
        state.isLoading = false
      })
      .addCase(getInvoice.rejected, (state, action) => {
        state.isLoading = true
      })
      .addCase(payWithCard.pending, (state) => {
        state.isLoading = true
      })
      .addCase(payWithCard.fulfilled, (state, action) => {
        state.isLoading = false
        state.paymentSuccess = true
        state.mg = { ...action.payload.data }
      })
      .addCase(payWithCard.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(payWithGofaaa.pending, (state) => {
        state.isLoading = true
      })
      .addCase(payWithGofaaa.fulfilled, (state, action) => {
        state.mg = action.payload.data
        state.isLoading = false
      })
      .addCase(payWithGofaaa.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

// export const { selectCalendar, unselectCalendar } = CalendarSlice.actions

// export const calendarList = (state) => state.calendar.calendars
// export const calendarLoading = (state) => state.calendar.isLoading
// export const calendarSelected = (state) => state.calendar.selected

export default PaymentSlice.reducer
