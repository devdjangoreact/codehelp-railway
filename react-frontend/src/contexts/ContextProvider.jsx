import { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(true);
  const [NavbarState, setNavbarState] = useState(true);
  // const [categoryId, setCategory] = useState();
  // const [postId, setPost] = useState();
  // const [typeData, setTypeData] = useState();
  const [categoryPost, setCategoryPost] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        menuState,
        setMenuState,
        NavbarState,
        setNavbarState,
        categoryPost,
        setCategoryPost,
        showModal,
        setShowModal,
        // typeData,
        // setTypeData,
        // postId,
        // setPost,
        // addModal,
        // categoryId,
        // setCategory,
        // setAddModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
