import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { githubReducer } from "./github/github.slice";
import { githubApi } from "./github/github.api";

import authReducer from "./auth/authSlice";
import categoryReducer from "./sections/categorySlite";
import postReducer from "./sections/postsSlite";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
    auth: authReducer,
    category: categoryReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
