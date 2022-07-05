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
