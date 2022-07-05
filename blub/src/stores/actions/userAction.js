import { BASE_URL } from "./actionType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        return await response.json().then((err) => {
          throw err;
        });
      }

      const data = await response.json();

      return data;
    } catch (err) {
      MySwal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    }
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        return await response.json().then((err) => {
          throw err;
        });
      }

      const data = await response.json();

      return data;
    } catch (err) {
      MySwal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    }
  };
};
