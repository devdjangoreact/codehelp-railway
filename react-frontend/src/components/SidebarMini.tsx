import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { logout } from "../features/auth/authSlice";
import { useStateContext } from "../contexts/ContextProvider";
import { getCategoryDepth } from "../features/sections/categorySlite";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";
import { BiMenu } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

export function SidebarMini() {
  const { setMenuState, menuState } = useStateContext();
  const dispatch = useAppDispatch();

  const { categorysDepth, deleteSuccess, updateSuccess, createSuccess } =
    useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryDepth());
  }, [dispatch, deleteSuccess, updateSuccess, createSuccess]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="flex h-[calc(100%-0px)] flex-col justify-between border-r bg-blue-200 mr-1 min-w-[60px] max-w-[60px] rounded-lg border overflow-y-scroll no-scrollbar">
      <div>
        <button
          className="inline-flex h-[55px] w-[55px] items-center justify-center"
          onClick={() => setMenuState(!menuState)}
        >
          <BiMenu className="w-8 h-8 p-1 bg-orange-50 rounded" />
        </button>

        <div className="border-t border-gray-100 h-full">
          <nav aria-label="Main Nav" className="flex flex-col border ">
            <div className="py-1 ">
              <NavLink
                to="/"
                className="t group relative flex justify-center rounded bg-blue-100 px-1 py-1.5 text-blue-700 hover:bg-orange-300"
              >
                <FiSettings className="w-8 h-8 p-1.5" />

                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-orange-300 px-2 py-1.5 text-xs font-medium text-white opacity-0  group-hover:opacity-100">
                  General
                </span>
              </NavLink>
            </div>

            <ul className="space-y-1 border-gray-100">
              <li key={"github"}>
                <NavLink
                  to={"/github"}
                  className="group relative flex justify-center rounded px-2 py-1.5 bg-blue-100 text-black hover:bg-orange-300 hover:text-gray-700"
                >
                  <BsGithub className="w-8 h-8 p-1.5" />

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    github
                  </span>
                </NavLink>
              </li>
              {categorysDepth &&
                categorysDepth.map((category) => (
                  <li key={category.id}>
                    <NavLink
                      to={"/" + category.slug}
                      className="group relative flex justify-center rounded px-2 py-1.5 bg-blue-100 text-black hover:bg-orange-300 hover:text-gray-700"
                    >
                      <HiUserGroup className="w-8 h-8 p-1.5" />

                      <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                        {category.name}
                      </span>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-2">
        <button
          className="group relative flex w-full justify-center border rounded-lg px-2 py-1.5 text-sm text-black bg-blue-100 hover:bg-orange-300 hover:text-gray-700"
          onClick={logoutHandler}
        >
          <TbLogout className="w-8 h-8" />

          <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
