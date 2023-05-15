import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "../store";

import sectionsService from "./services/Category.service";
import { CategoryGet, FormConnect } from "./models/Category.interface";

interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  updateSuccess: boolean;
  createSuccess: boolean;
  deleteSuccess: boolean;
}

interface SectionsState extends AsyncState {
  category: CategoryGet | null;
  categorySlug?: CategoryGet | null;
  categorys?: CategoryGet[];
  categorysDepth?: CategoryGet[];
}

const initialState: SectionsState = {
  category: null,
  categorys: [],
  categorySlug: null,
  categorysDepth: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  updateSuccess: false,
  createSuccess: false,
  deleteSuccess: false,
};

export const getCategorys = createAsyncThunk(
  "category/getCategorys",
  async () => {
    try {
      return await sectionsService.getCategorys();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const getCategoryDepth = createAsyncThunk(
  "category/getCategoryDepth",
  async () => {
    try {
      return await sectionsService.getCategoryDepth();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (id: string | undefined) => {
    try {
      return await sectionsService.getCategory(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const getCategorySlug = createAsyncThunk(
  "category/getCategory",
  async (slug: string | undefined) => {
    try {
      return await sectionsService.getCategorySlug(slug);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (form: FormConnect) => {
    try {
      return await sectionsService.updateCategory(form);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (form: FormConnect) => {
    try {
      return await sectionsService.createCategory(form);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id: string | undefined) => {
    try {
      return await sectionsService.deleteCategory(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    reset: (state) => {
      state.categorys = [];
      state.category = null;
      state.categorysDepth = [];
      state.categorySlug = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.updateSuccess = false;
      state.createSuccess = false;
      state.deleteSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // getCategorys
      .addCase(getCategorys.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.categorys = [];
      })
      .addCase(getCategorys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categorys = action.payload?.data || [];
      })
      .addCase(getCategorys.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.categorys = [];
      })
      // getCategoryDepth
      .addCase(getCategoryDepth.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.categorysDepth = [];
      })
      .addCase(getCategoryDepth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categorysDepth = action.payload?.data || [];
      })
      .addCase(getCategoryDepth.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.categorysDepth = [];
      })
      // // getCategory
      // .addCase(getCategory.pending, (state) => {
      //   state.isLoading = true;
      //   state.isSuccess = false;
      //   state.isError = false;
      //   state.category = null;
      // })
      // .addCase(getCategory.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.isError = false;
      //   state.category = action.payload?.data || null;
      // })
      // .addCase(getCategory.rejected, (state) => {
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.isError = true;
      //   state.category = null;
      // })

      // getCategorySlug
      .addCase(getCategorySlug.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.categorySlug = null;
      })
      .addCase(getCategorySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categorySlug = action.payload?.data || null;
      })
      .addCase(getCategorySlug.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.categorySlug = null;
      })

      // createCategory
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
        state.createSuccess = false;
        state.isError = false;
        state.category = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createSuccess = true;
        state.isError = false;
        state.category = action.payload?.category || null;
      })
      .addCase(createCategory.rejected, (state) => {
        state.isLoading = false;
        state.createSuccess = false;
        state.isError = true;
        state.category = null;
      })
      // updateCategory
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
        state.updateSuccess = false;
        state.isError = false;
        state.category = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateSuccess = true;
        state.isError = false;
        state.category = action.payload?.category || null;
      })
      .addCase(updateCategory.rejected, (state) => {
        state.isLoading = false;
        state.updateSuccess = false;
        state.isError = true;
        state.category = null;
      })
      // deleteCategory
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
        state.deleteSuccess = false;
        state.isError = false;
        state.category = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteSuccess = true;
        state.isError = false;
        state.category = action.payload?.data || null;
      })
      .addCase(deleteCategory.rejected, (state) => {
        state.isLoading = false;
        state.deleteSuccess = false;
        state.isError = true;
        state.category = null;
      });
  },
});

export const { reset } = sectionsSlice.actions;

export const selectedsections = (state: RootState) => {
  return state.category;
};

export default sectionsSlice.reducer;
