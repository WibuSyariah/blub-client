import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../stores/actions/userAction";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();

    dispatch(registerUser({ email, password })).then((response) => {
      localStorage.setItem("access_token", response.access_token);

      navigate("/");
    });
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form onSubmit={registerHandler}>
              <div className="text-center">
                <label className="form-label inline-block mb-2 text-gray-700 text-xl ">
                  Register
                </label>
              </div>
              <div className="form-group mb-6">
                <label className="form-label inline-block mb-2 text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="
                    form-control 
                    block 
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white 
                    bg-clip-padding
                    border 
                    border-solid 
                    border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputEmail1"
                  placeholder="dummy@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group mb-6">
                <label className="form-label inline-block mb-2 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="
                    form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white 
                    bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputPassword1"
                  placeholder="abc123"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <small
                  id="passwordHelp"
                  className="block mt-1 text-xs text-gray-600"
                >
                  We'll never share your password with anyone else.
                </small>
              </div>

              <button
                type="submit"
                className="
                  px-6
                  py-2.5
                  bg-green-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-green-700 hover:shadow-lg
                  focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-green-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="
                  mt-8
                  px-6
                  py-2.5
                  bg-green-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-green-700 hover:shadow-lg
                  focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-green-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
