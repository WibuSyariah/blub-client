import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../stores/actions/postAction";

export default function ContentPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-5/6 p-12 m-24 bg-green-500 items-center">
          {posts.map((post) => (
            <div className="bg-white text-center m-24 p-8">
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
