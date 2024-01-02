import { useState } from "react";

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userID, setUsersID] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUsersID(e.target.value)

    const dispatch = useDispatch()
    const onSavePostClicked = () =>{
        if (title && content) {
            dispatch(
                postAdded({
                    id:nanoid(),
                    title,
                    content,
                    userID
                })
            )
            setTitle('')
            setContent('')
        }
    }

    const usersOptions = users.map(user => (
        <option key = {user.id} value={user.id}>
            {user.name}
        </option>
    )
    )

  return (
    <section>
    <h2>Add a New Post</h2>
    <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userID} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
        />
        <button
            type="button"
            onClick={onSavePostClicked}
       
        >Save Post</button>
    </form>
</section>
  )
}

export default AddPostForm
