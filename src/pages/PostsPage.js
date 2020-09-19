import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' //new
import { fetchPosts, postsSelector } from '../slices/posts' //new
import { useNavigate } from "react-router-dom";

// import { Routes, Route } from 'react-router-dom'

// import { connect } from 'react-redux'

// Bring in the asynchronous fetchPosts action
//import { fetchPosts } from '../actions/postsActions'

import { Post } from '../components/Post'

// Redux state is now in the props of the component
//const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {

const PostsPage = () => {
    const dispatch = useDispatch() //new
    const {posts, loading, hasErrors} = useSelector(postsSelector)
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    // Show loading, error, or success state
    const renderPosts = () => {
        if (loading) {
            //return navigate('/redirect', {replace: true})
            return <p>Loading posts...</p>
        } 
            
        if (hasErrors) return <p>Unable to display posts.</p>

        return posts.map((post) => <Post key={post.id} post={post} />)
    }

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

export default PostsPage





//OLD WAY

// Map Redux state to React component props (longer way)
//   const mapStateToProps = (state) => ({
//     loading: state.posts.loading,
//     posts: state.posts.posts,
//     hasErrors: state.posts.hasErrors,
//   })


// Map Redux state to React component props (short way)
//const mapStateToProps = state => state.posts;


// Connect Redux to React
//export default connect(mapStateToProps)(PostsPage)