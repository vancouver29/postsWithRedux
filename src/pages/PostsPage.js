import React, { useEffect } from "react";
import { connect } from "react-redux";

// Bring in the asynchronous fetchPost action
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

// Redux state is now in the props of the component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]); // effect will be skipped if dispatch hasnt changed between re-renders

  // Showing loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts ...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => <Post key={post.id} post={post} excerpt />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

// Connect Redux to React
export default connect(mapStateToProps)(PostsPage);
