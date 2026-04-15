import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/quotes/random';

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL);

      if (response.status > 399) {
        throw new Error('Error: Failed to fetch quotes');
      }

      return fulfillWithValue(response.data);
    } catch (error) {
      const message = error.message || error.toString();
      return rejectWithValue({ message });
    }
  },
);

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    data: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
  },
  reducers: {
    clear: () => {
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export const { clear } = quoteSlice.actions;
export default quoteSlice.reducer;
