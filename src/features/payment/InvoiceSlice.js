import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedInvoice: null,
  invoices: [],
}

const InvoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    selectInvoice: (state, action) => {
      state.selectedInvoice = action.payload
    },
  },
})

export const { selectInvoice } = InvoiceSlice.actions

export default InvoiceSlice.reducer
