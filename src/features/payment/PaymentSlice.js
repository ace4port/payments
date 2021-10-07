import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import * as api from './api'

const initialState = {
  loading: false,
  error: false,
  payment: {},
}

// export const getCalendar = createAsyncThunk('event/getCalendar', async () => {
//   return await api.getAllCalendar()
// })

// export const createCalendar = createAsyncThunk(
//   'event/createCalendar',
//   async (data) => {
//     console.log('Here')
//     return await api.createCalendar(data)
//   }
// )

const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    init: (state) => {
      state = initialState
    },
  },
  // extraReducers: (builder) => {
  // builder
  // .addCase(getCalendar.pending, (state) => {
  //   state.isLoading = true
  // })
  // .addCase(getCalendar.fulfilled, (state, action) => {
  //   state.calendars = action.payload.data
  //   state.isLoading = false
  // })
  // .addCase(getCalendar.rejected, (state, action) => {
  //   state.isLoading = true
  // })
  // },
})

// export const { selectCalendar, unselectCalendar } = CalendarSlice.actions

// export const calendarList = (state) => state.calendar.calendars
// export const calendarLoading = (state) => state.calendar.isLoading
// export const calendarSelected = (state) => state.calendar.selected

export default PaymentSlice.reducer
