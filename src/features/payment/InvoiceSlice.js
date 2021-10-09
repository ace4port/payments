import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from './PaymentApi'

const initialState = {
  selectedInvoice: null,
  loading: false,
  error: false,
  invoice: [],
}

export const getInvoice = createAsyncThunk('payment/getInvoice', async () => {
  return await api.getInvoices()
})

const InvoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    selectInvoice: (state, action) => {
      state.selectedInvoice = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoice.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getInvoice.fulfilled, (state, action) => {
        state.invoice = action.payload.data
        state.isLoading = false
      })
      .addCase(getInvoice.rejected, (state, action) => {
        state.isLoading = true
      })
  },
})

export const { selectInvoice } = InvoiceSlice.actions

export default InvoiceSlice.reducer
