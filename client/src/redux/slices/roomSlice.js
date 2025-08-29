  import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
  import { createRoom, detailRoom, getAllRooms } from "../../services/room";

  const initialState = {
      loading:false,
      rooms : [],
      error:null,
      selectedRoom:null
  }

  export const createRoomR = createAsyncThunk("createRoom",async(newPerson,thunkAPI)=>{
      try {
          const res = await createRoom(newPerson)
          alert(res.data.message)
          return res.data.newRoom
      } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.message)
      }
  })
  export const getAllRoomsR = createAsyncThunk("gelAllRooms",async(_,thunkAPI)=>{
      try {
          const res = await getAllRooms()
          return res.data.rooms
      } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.message)
      }
  })

  export const detailRoomR = createAsyncThunk("detailsRoom",async(id,thunkAPI)=>{
    try {
      const res = await detailRoom(id)
      return res.data.detailRoom
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  })


  const roomSlice = createSlice({
      name:"room",
      initialState,
      reducers:{

      },
      extraReducers:(builder)=>{
          builder
  //  create room
        .addCase(createRoomR.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createRoomR.fulfilled, (state, action) => {
          state.loading = false;
          state.rooms = [...state.rooms, action.payload];
        })
        .addCase(createRoomR.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        //  get rooms
        .addCase(getAllRoomsR.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllRoomsR.fulfilled, (state, action) => {
          state.loading = false;
          state.rooms = action.payload;
        })
        .addCase(getAllRoomsR.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        //detail room
        .addCase(detailRoomR.fulfilled,(state,action)=>{
          state.selectedRoom = action.payload
        })
      }
  })

  export const {dsdf} = roomSlice.actions
  export default roomSlice.reducer