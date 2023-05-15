import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostGet } from "../../../features/sections/models/Post.interface";
import { TfiSave } from "react-icons/tfi";

import { FaRegEdit } from "react-icons/fa";
import { Markdown } from "../..";
import { useAppDispatch } from "../../../hooks/redux/hooks";
import { deletePost, updatePost } from "../../../features/sections/postsSlite";

interface Props {
  post: PostGet;
}

const PostForm = ({ post }: Props) => {
  const [name, setName] = useState(post.name);
  const [slug, setSlug] = useState(post.slug);
  const [description, setDescription] = useState(post.description);

  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  // update category
  const handleUpdatePost = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const form = {
      name: name,
      id: post.id,
      slug: slug,
      description: description,
      category: post.category,
    };

    dispatch(updatePost(form));
    setShowModal(false);
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLTextAreaElement;
    var _id = target.id;

    if (_id === "save") {
      setShowModal(true);
      setEdit(!edit);
    } else if (_id === "edit") {
      setName(post.name);
      setSlug(post.slug);
      setDescription(post.description);
      setEdit(!edit);
    }
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(deletePost(post.id));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <p> Name - {name};</p>
                    <p> Slug - {slug}; </p>
                    <p> description - {description}</p>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(event) => handleUpdatePost(event)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <form
        id={"" + post.name}
        key={post.id}
        className="p-2 border-t border-black rounded-b-lg mb-1 shadow-2xl bg-white"
      >
        <div className="flex">
          {edit ? (
            <>
              <div className="mx-3">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full h-8 rounded border p-1 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                />
              </div>
              <div className="mx-3 ">
                <input
                  id="slug"
                  type="text"
                  placeholder="Slug"
                  value={slug || ""}
                  onChange={(e) => setSlug(e.target.value)}
                  className="block w-full h-8 rounded border p-1 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-900"
                />
              </div>
            </>
          ) : (
            <h3 className="text-lg font-semibold dark:text-white px-4">
              {post.name}
            </h3>
          )}
          <div className=" flex-1 flex items-center justify-end font-light">
            <button key={post.id} onClick={handleEdit}>
              {edit ? (
                <TfiSave
                  id={"save"}
                  className=" w-8 h-8 p-1.5 hover:bg-orange-300 rounded-lg"
                />
              ) : (
                <FaRegEdit
                  id={"edit"}
                  className=" w-8 h-8 p-1.5 hover:bg-orange-300 rounded-lg"
                />
              )}
            </button>
            <button onClick={handleDelete}>
              <MdDeleteOutline className=" w-8 h-8 p-1 hover:bg-orange-300 rounded-lg" />
            </button>
          </div>
        </div>
        <div
          key={post.id}
          className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400"
        >
          <Markdown
            value_str={post.description || ""}
            edit={edit}
            className={
              "block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800" ||
              ""
            }
            onChange={setDescription}
          ></Markdown>
        </div>
      </form>
    </>
  );
};

export default PostForm;
