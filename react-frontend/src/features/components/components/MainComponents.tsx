import React from "react";
import {
  Loader,
  ModalCenter,
  Input,
  NavBar,
  SidebarMini,
  Sidebar,
  Message,
  ProfileForm,
  SkrollSteps,
  SearchForm,
  Scrollspy,
  Actions,
  Accordion,
  AlertColor,
  Avatar,
  GroupAvatar,
  Breadcrumb,
  Button,
  Carts,
  Galery,
  Price,
  SidebarAutoClose,
  Slider,
} from "../../../components";

const MainComponents = () => {
  const conponents = [
    Loader,
    ModalCenter,
    Input,
    NavBar,
    SidebarMini,
    Sidebar,
    Message,
    ProfileForm,
    SkrollSteps,
    SearchForm,
    Scrollspy,
    Actions,
    Accordion,
    AlertColor,
    Avatar,
    GroupAvatar,
    Breadcrumb,
    Button,
    Carts,
    Galery,
    Price,
    SidebarAutoClose,
    Slider,
  ];

  return (
    <>
      <div className="grid grid-cols-6 m-2 h-full ">
        <div className="col-span-1  p-2 border border-black rounded-lg ">
          <ul
            className="sticky top-0"
            data-hs-scrollspy="#scrollspy-2"
            data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2"
          >
            <li data-hs-scrollspy-group>
              <a
                href="#item-1"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active"
              >
                Loader
              </a>
            </li>
            <li data-hs-scrollspy-group>
              <a
                href="#item-2"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                ModalCenter
              </a>
            </li>
            <li data-hs-scrollspy-group>
              <a
                href="#item-3"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Message
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-4"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                NavBar
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-5"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                SidebarMini
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-6"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Sidebar
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-7"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Message
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-8"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                ProfileForm
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-9"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                SkrollSteps
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-10"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                SearchForm
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-11"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Scrollspy
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-12"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Actions
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-13"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Accordion
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-14"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                AlertColor
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-15"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Avatar
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-16"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                GroupAvatar
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-17"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Breadcrumb
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-18"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Button
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-19"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Carts
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-20"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Galery
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-21"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Price
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-22"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                SidebarAutoClose
              </a>
            </li>

            <li data-hs-scrollspy-group>
              <a
                href="#item-23"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Slider
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 ml-2 ">
          <div id="scrollspy-2" className="space-y-4 ">
            <div id="item-1" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 1</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Loader />
              </p>
            </div>

            <div id="item-2" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 2</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {/* <ModalCenter /> */}
              </p>
            </div>

            <div id="item-3" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Message />
              </p>
            </div>

            <div id="item-4" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <NavBar />
              </p>
            </div>

            <div id="item-5" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <SidebarMini />
              </p>
            </div>

            <div id="item-6" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Sidebar />
              </p>
            </div>

            <div id="item-7" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Message />
              </p>
            </div>

            <div id="item-8" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <ProfileForm />
              </p>
            </div>

            <div id="item-9" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <SkrollSteps />
              </p>
            </div>

            <div id="item-10" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <SearchForm />
              </p>
            </div>

            <div id="item-11" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {/* <Scrollspy /> */}
              </p>
            </div>

            <div id="item-12" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Actions />
              </p>
            </div>

            <div id="item-13" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Accordion />
              </p>
            </div>

            <div id="item-14" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <AlertColor />
              </p>
            </div>

            <div id="item-15" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Avatar />
              </p>
            </div>

            <div id="item-16" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <GroupAvatar />
              </p>
            </div>

            <div id="item-17" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Breadcrumb />
              </p>
            </div>

            <div id="item-18" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Button />
              </p>
            </div>

            <div id="item-19" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Carts />
              </p>
            </div>

            <div id="item-20" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Galery />
              </p>
            </div>

            <div id="item-21" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Price />
              </p>
            </div>

            <div id="item-22" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {/* <SidebarAutoClose /> SidebarAutoClose */}
              </p>
            </div>

            <div id="item-23" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <Slider />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponents;
