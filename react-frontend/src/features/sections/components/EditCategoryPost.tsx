import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { PostGet } from "../models/Post.interface";
import { CategoryGet } from "../models/Category.interface";
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "../categorySlite";
import { Markdown } from "../../../components";

import { updatePost, createPost, deletePost } from "../postsSlite";

const EditCategoryPost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const parametrs = location.state as any;
  console.log(parametrs);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(parametrs?.categoryId);
  const [id, setId] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  const { post, category } = useAppSelector((state) => state);
  //create update
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = {
      name: name,
      id: id,
      slug: slug,
      description: description,
      parent: description,
      category: categoryId,
    };

    if (parametrs.type_obj === "category") {
      if (parametrs.obj !== "") {
        dispatch(updateCategory(form));
      } else {
        dispatch(createCategory(form));
      }
    } else if (parametrs.type_obj === "post") {
      if (parametrs.obj !== "") {
        dispatch(updatePost(form));
      } else {
        console.log(form);
        dispatch(createPost(form));
      }
    }
    if (!category.isError && !post.isError) {
      navigate(-1);
    }
  };

  const handleDelete = () => {
    if (parametrs.type_obj === "category") {
      dispatch(deleteCategory(id));
    } else if (parametrs.type_obj === "post") {
      dispatch(deletePost(id));
    }
    navigate(-1);
  };

  useEffect(() => {
    if (parametrs.obj !== "") {
      if (parametrs.type_obj === "post") {
        const object = parametrs.post as PostGet;
        setName(object?.name);
        setSlug(object?.slug);
        setDescription(object?.description);
        setId(object?.id);
        setCategoryId(object?.category);
      } else if (parametrs.type_obj === "category") {
        const object = parametrs.category as CategoryGet;
        setName(object?.name);
        setSlug(object?.slug);
        // setDescription(object?.description);
        setId(object?.id);
      } else if (parametrs.obj === "") {
        setName("");
        setSlug("");
        setDescription("");
        setId("");
        setCategoryId("");
      }
    }
  }, [dispatch, parametrs]);

  // if (post.isError) return <h1> Error - {post?.Post} </h1>;
  // if (codeHelp.isError) return <h1>Error - {codeHelp?.category} </h1>;
  if (category.isLoading) return <h1>Loading....</h1>;
  if (post.isLoading) return <h1>Loading....</h1>;

  return (
    <section className="p-6 dark:text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="container w-full max-w-xl p-8 mx-auto space-y-6
       rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">{name}</h2>
        <div>
          <label id="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          />
        </div>
        <div>
          <label id="email" className="block mb-1 ml-1">
            Slug
          </label>
          <input
            id="slug"
            type="text"
            placeholder="Slug"
            value={slug || ""}
            onChange={(e) => setSlug(e.target.value)}
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          />
        </div>
        <div>
          <label id="description" className="block mb-1 ml-1">
            Description
          </label>
          <Markdown
            value_str={description || ""}
            edit={true}
            // className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          ></Markdown>
        </div>
        <div className="flex justify-between ">
          {parametrs.obj === "" ? (
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400
                 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
            >
              Create
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400
                   focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
              >
                update
              </button>
              <button
                onClick={handleDelete}
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400
                   focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
              >
                delete
              </button>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default EditCategoryPost;
