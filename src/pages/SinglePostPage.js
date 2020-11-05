import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../actions/postActions";
import { fetchComments } from "../actions/commentsActions";

import { Post } from "../components/Post";
import { Comment } from "../components/Comment";

const SinglePostPage = ({
  match,
  dispatch,
  post,
  hasErrors,
  loading,
  comments,
}) => {
  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, match]);

  const renderPost = () => {
    console.log("loading" + loading);
    if (loading.post) return <p>Loading post...</p>;
    if (hasErrors.post) return <p>Unable to display post.</p>;

    return <Post post={post} />;
  };

  const renderComments = () => {
    console.log("comments: " + comments);
    if (loading.comments) return <p>Loading comments...</p>;
    if (hasErrors.comments) return <p>Unable to display post.</p>;

    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <section>
      <h1>Post</h1>
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  loading: { post: state.post.loading, comments: state.comments.loading },
  hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors },
  comments: state.comments.comments,
});

export default connect(mapStateToProps)(SinglePostPage);
