import jsonplaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonplaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: data,
  });
};

export const fetchUser = function (id) {
  return function (dispatch) {
    _fetchUser(id, dispatch);
  };
};

export const fetchUser2 = (id) => async (dispatch) => {
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
