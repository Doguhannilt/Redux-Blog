import {useSelector} from 'react-redux'
import { selectAllPosts } from './postsSlice';
import React from 'react'
import PostAuthor from './PostAuthor';
const PostsList = () => {
// Select the 'posts' slice from the Redux store using the useSelector hook.
const posts = useSelector(selectAllPosts);


if (!posts || posts.length === 0) {
  return <p>No posts available</p>;
}

// Map over the 'posts' array to create a list of rendered posts.
const renderedPosts = posts.map(post => (
  // For each post, create an 'article' element with a unique key based on the post's ID.
  <article key={post.id}>
    {/* Display the post's title within an 'h3' heading element. */}
    <h3>{post.title}</h3>
    {/* Display the first 100 characters of the post's content within a 'p' paragraph element. */}
    <p>{post.content.substring(0, 100)}</p>

    <p classname="postCredit">
      <PostAuthor userId = {post.user} />
    </p>
  </article>
));

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList
