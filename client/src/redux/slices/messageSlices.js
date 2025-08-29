import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createMessage,
  getDetailMessage,
} from "../../services/message/message";

const initialState = {
  messages: [],
};

export const createMessageR = createAsyncThunk(
  "createMessage",
  async (data, thunkAPI) => {
    try {
      const message = await createMessage(data);
      return message.data.newMessage;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const detailMessageR = createAsyncThunk(
  "message/detail",
  async (roomId, thunkAPI) => {
    try {
      const res = await getDetailMessage(roomId);
      return res.data.detailMessage; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMessageR.fulfilled, (state, action) => {
        state.messages = [...state.messages, action.payload];
      })
      .addCase(detailMessageR.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
  },
});

export default messageSlice.reducer;
