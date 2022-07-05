import { BASE_URL, GET_POST, GET_POSTS } from "./actionType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const getPosts = (posts) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      const data = await response.json();

      dispatch({
        type: GET_POSTS,
        payload: data,
      });
    } catch (err) {
      MySwal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    }
  };
};

export const addPost = (content) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });

      if (!response.ok) {
        return await response.json().then((err) => {
          throw err;
        });
      }

      const data = await response.json();

      return data;
    } catch (error) {
      MySwal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };
};
