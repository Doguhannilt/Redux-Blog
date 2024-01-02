import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0' , name: 'dude'},
    {id: '1', name: 'neil'},
    {id: '2', name:'lone'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer