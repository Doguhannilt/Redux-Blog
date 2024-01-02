import {createSlice} from "@reduxjs/toolkit"

const initialState = [];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            // The payload, representing form data, is expected to contain fields such as username and password.
            state.push(action.payload) // Upon invoking state.push, the payload is transformed into an array element.
        }
    }
})


export const selectAllPosts = (state) => state.posts
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer

