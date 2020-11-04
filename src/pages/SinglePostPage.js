import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../actions/postActions";

import { Post } from "../components/Post";

const SinglePostPage = ({ match, dispatch, post, hasErrors, loading }) => {
  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchPost(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (loading.post) return <p>Loading post...</p>;
    if (hasErrors.post) return <p>Unable to display post.</p>;

    return <Post post={post} />;
  };

  return (
    <section>
      <h1>Post</h1>
      {renderPost()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  loading: { post: state.post.loading },
  hasErrors: { post: state.post.hasErrors },
});

export default connect(mapStateToProps)(SinglePostPage);
