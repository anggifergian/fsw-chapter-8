import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post'

const PostsPage = ({ dispatch, loading, posts, isErrors }) => {
  useEffect(() => {
    console.log('mount')
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    console.log('render')
    if (loading) return <p>Loading posts...</p>
    if (isErrors) return <p>Unable to display posts.</p>
    return <h1>Hello World</h1>
    // return posts.map((post) => <Post key={post.id} post={post} />)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  isErrors: state.posts.isErrors,
})

export default connect(mapStateToProps)(PostsPage)
