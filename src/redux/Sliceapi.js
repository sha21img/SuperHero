import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchApiData = createAsyncThunk('data/getRestorent', async () => {
console.log("sajsGHSWHJDHSDJWD")

  return response.data;
});


export const RestorentSlice = createSlice({
  name: 'restorent',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchApiData.pending, (state, action) => {
      state.isLoading === true;
      state.error = null;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.isLoading === false;
      state.data = action.payload;
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default RestorentSlice;
