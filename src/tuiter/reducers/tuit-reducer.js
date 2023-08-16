import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, findTuitsThunk, deleteTuitThunk} from "../services/tuits-thunks";
const initialState = {
   tuits: [],
   loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "python.png",
   };
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },
        [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits .filter(t => t._id !== payload)
    },
      [findTuitsThunk.pending]:
         (state) => {
            state.loading = true
            state.tuits = [] },
      [findTuitsThunk.fulfilled]:
         (state, { payload }) => {
            state.loading = false
            state.tuits = payload },
      [findTuitsThunk.rejected]:
         (state, action) => {
            state.loading = false
            state.error = action.error
      },
      [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
         state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
     
  }
    },
    reducers: { }
   });
export default tuitsSlice.reducer 
   