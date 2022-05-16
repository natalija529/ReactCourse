import jsonplaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonplaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: data,
  });
};

export const fetchUserMemoize = function (id) {
  return function (dispatch) {
    _fetchUser(id, dispatch);
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const { data } = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
});
