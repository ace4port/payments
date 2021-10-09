import * as api from './PaymentApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: false,
  success: false,
  msg: '',
}

export const payWithCard = createAsyncThunk(
  'payment/card',
  async (data, { rejectWithValue }) => {
    try {
      return await api.payWithCard(data)
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const payWithGofaaa = createAsyncThunk(
  'payment/gofaaa',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.payWithGofaaa(data)
      return res
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    init(state) {
      state = initialState
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
        state.msg = JSON.stringify(action.payload)
      })

      .addCase(payWithGofaaa.pending, (state) => {
        state.isLoading = true
      })
      .addCase(payWithGofaaa.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        console.log('Fulfilled', action.payload)
        state.msg = action.payload.data
      })
      .addCase(payWithGofaaa.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
        // state.msg = action.payload
        state.msg = JSON.stringify(action.payload)
      })
  },
})

export const { init } = PaymentSlice.actions

// export const calendarList = (state) => state.calendar.calendars
// export const calendarLoading = (state) => state.calendar.isLoading
// export const calendarSelected = (state) => state.calendar.selected

export default PaymentSlice.reducer
