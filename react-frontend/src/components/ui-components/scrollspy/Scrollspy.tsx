import React, { useEffect, useState } from "react";
import { PostGet } from "../../../features/sections/models/Post.interface";
import { CategoryGet } from "../../../features/sections/models/Category.interface";

import PostForm from "./PostForm";
import { MdAddCircleOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { getCategorySlug } from "../../../features/sections/categorySlite";

import { useNavigate, useParams } from "react-router-dom";
import { createPost, getPosts } from "../../../features/sections/postsSlite";

interface Props {
  posts?: PostGet[];
  edit?: boolean;
  category?: CategoryGet;
  categorys?: CategoryGet[];
}

const Scrollspy = ({ categorys }: Props) => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { categorysDepth, categorySlug } = useAppSelector(
    (state) => state.category
  );

  const { Posts, updateSuccessPost, createSuccessPost, deleteSuccessPost } =
    useAppSelector((state) => state.post);

  const handleCreatePost = () => {
    const form = {
      name: "name",
      slug: Math.random().toString(36).substring(2, 9),
      description: "description",
      category: categorySlug.id,
      id: "",
    };

    dispatch(createPost(form));
  };

  console.log(categorySlug);

  useEffect(() => {
    dispatch(getPosts(String(params.slug)));
    // dispatch(getCategorySlug(String(params.slug)));
  }, [
    dispatch,
    updateSuccessPost,
    createSuccessPost,
    deleteSuccessPost,
    categorysDepth,
    params,
  ]);

  return (
    <>
      <div className="grid grid-cols-6 h-[calc(100%-6px)] ">
        <div className="col-span-1 rounded-lg bg-white px-2 mr-1 shadow-2xl">
          <ul
            className="sticky top-2 mt-2"
            data-hs-scrollspy="#scrollspy-2"
            data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2"
          >
            <div className="flex w-full p-1 my-1 rounded-lg shadow sm:text-lg hover:text-blue-600 hover:bg-orange-50">
              <span className="font-bold ">
                {categorySlug && categorySlug.name}
              </span>
              <div className=" flex-1 flex items-center justify-end font-light">
                <button onClick={handleCreatePost}>
                  <MdAddCircleOutline className=" w-8 h-8 p-1 hover:bg-orange-300 rounded-lg" />
                </button>
              </div>
            </div>

            {Posts &&
              Posts.map((post) => (
                <li key={post.id} data-hs-scrollspy-group>
                  <a
                    href={"#" + post.name}
                    className="block py-1 px-2 text-base font-normal leading-6 hover:text-orange-600 active"
                  >
                    {post.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className="col-span-5 mx-1">
          <div id="scrollspy-2" className="space-y-2 rounded-lg">
            {Posts &&
              Posts.map((post) => <PostForm key={post.id} post={post} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Scrollspy;
