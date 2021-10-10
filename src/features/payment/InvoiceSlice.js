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
    invoicePaid: (state, action) => {
      console.log('Heree')
      state.invoice = state.invoice.map((inv) =>
        inv.id === action.payload.id ? action.payload : inv
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoice.pending, (state) => {
        state.loading = true
      })
      .addCase(getInvoice.fulfilled, (state, action) => {
        state.invoice = action.payload.data
        state.loading = false
      })
      .addCase(getInvoice.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export const { selectInvoice, invoicePaid } = InvoiceSlice.actions

export default InvoiceSlice.reducer
