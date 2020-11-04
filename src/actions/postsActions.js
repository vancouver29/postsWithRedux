// Fetching Post is an asynchronous action

/* Create Redux action types */
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

/*  Create Redux action creators that return an action */

// begin telling Redux we're going to fetch posts from an API
export const getPosts = () => ({ type: GET_POSTS });

// pass the posts to Redux on successful API call
export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

// inform Redux that an error was encountered during Redux on failed API call
export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

/* Combine them all in an asynchronous thunk */
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
