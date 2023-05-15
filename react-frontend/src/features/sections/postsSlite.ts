import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "../store";

import codeHelpService from "./services/Posts.service";
import { PostGet, FormConnect } from "./models/Post.interface";

interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  updateSuccessPost: boolean;
  createSuccessPost: boolean;
  deleteSuccessPost: boolean;
}

interface CodeHelpState extends AsyncState {
  Post: PostGet | undefined;
  Posts: PostGet[];
}

const initialState: CodeHelpState = {
  Post: undefined,
  Posts: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  updateSuccessPost: false,
  createSuccessPost: false,
  deleteSuccessPost: false,
};

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (categoryId: string) => {
    try {
      return await codeHelpService.getPosts(categoryId);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getPost",
  async (id: string | undefined) => {
    try {
      return await codeHelpService.getPost(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (form: FormConnect) => {
    try {
      return await codeHelpService.updatePost(form);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (form: FormConnect) => {
    try {
      return await codeHelpService.createPost(form);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (id: string | undefined) => {
    try {
      return await codeHelpService.deletePost(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.Posts = [];
      state.Post = undefined;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.updateSuccessPost = false;
      state.createSuccessPost = false;
      state.deleteSuccessPost = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // getPosts
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.Posts = [];
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Posts = action.payload?.data || [];
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.Posts = [];
      })
      // getPost
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.Post = undefined;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Post = action.payload?.data || undefined;
      })
      .addCase(getPost.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.Post = undefined;
      })
      // createPost
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.createSuccessPost = false;
        state.isError = false;
        state.Post = undefined;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createSuccessPost = true;
        state.isError = false;
        state.Post = action.payload?.post || undefined;
      })
      .addCase(createPost.rejected, (state) => {
        state.isLoading = false;
        state.createSuccessPost = false;
        state.isError = true;
        state.Post = undefined;
      })
      // updatePost
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
        state.updateSuccessPost = false;
        state.isError = false;
        state.Post = undefined;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateSuccessPost = true;
        state.isError = false;
        state.Post = action.payload?.post || undefined;
      })
      .addCase(updatePost.rejected, (state) => {
        state.isLoading = false;
        state.updateSuccessPost = false;
        state.isError = true;
        state.Post = undefined;
      })
      // deletePost
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.deleteSuccessPost = false;
        state.isError = false;
        state.Post = undefined;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteSuccessPost = true;
        state.isError = false;
        state.Post = action.payload?.data || undefined;
      })
      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false;
        state.deleteSuccessPost = false;
        state.isError = true;
        state.Post = undefined;
      });
  },
});

export const { reset } = postSlice.actions;

export const selectedCodeHelp = (state: RootState) => {
  return state.post;
};

export default postSlice.reducer;
