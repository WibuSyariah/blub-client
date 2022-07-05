import React, { useState } from "react";
import { useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost } from "../stores/actions/postAction";

export default function ContentPage() {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  const addPostHandler = (e) => {
    e.preventDefault();

    dispatch(addPost({ content })).then((response) => {
      if (response) {
        MySwal.fire({
          title: "Success",
          text: "Post added successfully",
          icon: "success",
          timer: 2000,
        });

        dispatch(getPosts());
        setIsOpen(false);
        setContent("");
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          type="submit"
          className="
                  m-4
                  px-6
                  py-2.5
                  bg-zinc-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-zinc-700 hover:shadow-lg
                  focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-zinc-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
        >
          Add Post
        </button>
        <Dialog
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-sm rounded bg-white">
              <div className="block p-6 rounded-lg shadow-lg bg-[#ECD393] max-w-sm">
                <form>
                  <div className="form-group mb-2">
                    <label className="form-label inline-block mb-2 text-gray-700">
                      Content
                    </label>
                    <textarea
                      className="form-control block
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
                      cols="40"
                      rows="3"
                      onChange={(e) => setContent(e.target.value)}
                      value={content}
                    ></textarea>
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
                  ease-in-out
                  mt-2
                  "
                    onClick={addPostHandler}
                  >
                    Add
                  </button>
                </form>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
        <div className="w-5/6 p-12 m-24 bg-green-500 items-center">
          {posts.map((post) => (
            <div className="bg-white text-center m-24 p-8" key={post.id}>
              <h1 className="m-8">WILDFIRE ON AUSTRALIA</h1>
              <p>{post.content}</p>
              <button
                type="submit"
                className="
                  m-8
                  px-6
                  py-2.5
                  bg-zinc-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-zinc-700 hover:shadow-lg
                  focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-zinc-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
