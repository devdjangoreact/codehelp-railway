import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import SortableTree from "react-sortable-tree";
import {
  createCategory,
  deleteCategory,
  getCategorys,
  updateCategory,
} from "../../../features/sections/categorySlite";
import { FormConnect } from "../../../features/sections/models/Category.interface";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";

interface Props {
  title?: string;
  form?: FormConnect;
  type_obj?: string;
}

export default function ModalCenter({ title, type_obj }: Props) {
  const { showModal, setShowModal } = useStateContext();

  const [nameCategory, setNameCategory] = useState("");
  const [slugCategory, setSlugCategory] = useState("");
  const [parent, setParent] = useState("");

  const [catEdit, setcatEdit] = useState(" ");

  const { deleteSuccess, updateSuccess, createSuccess, categorys } =
    useAppSelector((state) => state.category);

  const dispatch = useAppDispatch();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const form = {
      name: nameCategory,
      slug: slugCategory,
      parent: parent,
      id: catEdit,
    };

    if (catEdit === " ") {
      dispatch(createCategory(form));
    } else {
      dispatch(updateCategory(form));
    }
    setShowModal(false);
  };

  const handleEdit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    categorys?.forEach((category) => {
      if (String(category.id) === String(event.target.value)) {
        setNameCategory(category.name);
        console.log(category);
        setSlugCategory(category.slug);
        setParent(category.parent);
      }
    });

    setcatEdit(event.target.value);
  };

  const handleDelete = () => {
    dispatch(deleteCategory(catEdit));

    setShowModal(false);
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     treeData: [
  //       { title: 'Chicken', children: [{ title: 'Egg' }] },
  //       { title: 'Fish', children: [{ title: 'fingerline' }] },
  //     ],
  //   };
  // }

  useEffect(() => {
    dispatch(getCategorys());
  }, [dispatch, deleteSuccess, updateSuccess, createSuccess]);
  return (
    <>
      {showModal ? (
        <>
          {/* <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div> */}

          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
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
                  <div className="mb-6">
                    <select
                      id="countries"
                      className="block w-full mb-1 rounded border p-2 px-1 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                      onChange={(event) => handleEdit(event)}
                      defaultValue=" "
                    >
                      <option selected value=" ">
                        Create new
                      </option>
                      {categorys &&
                        categorys.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                    {catEdit === " " ? (
                      ""
                    ) : (
                      <button
                        className="flex text-center m-auto"
                        onClick={handleDelete}
                      >
                        <p className="p-1">Delete category</p>
                        <MdDeleteOutline className=" w-8 h-8 p-1 hover:bg-orange-300 rounded-lg" />
                      </button>
                    )}
                  </div>
                  <form action="">
                    <>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={nameCategory || ""}
                        onChange={(e) => setNameCategory(e.target.value)}
                        className="block w-full rounded border mb-1 px-2 p-1 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                      />

                      <input
                        id="slug"
                        type="text"
                        placeholder="Slug"
                        value={slugCategory || ""}
                        onChange={(e) => setSlugCategory(e.target.value)}
                        className="block w-full rounded border mb-1 px-2 p-1 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                      />
                      <select
                        id="countries"
                        className="block w-full rounded border mb-1 px-2 p-1 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                        onChange={(e) => setParent(e.target.value)}
                        defaultValue=" "
                      >
                        {categorys &&
                          categorys.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        <option selected value=" ">
                          Choose a parent
                        </option>
                      </select>
                    </>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(event) => handleSubmit(event)}
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
    </>
  );
}
