import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPosts } from "../postsSlite";
import { getCategorys, getCategorySlug } from "../categorySlite";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { Scrollspy } from "../../../components";
import { PostGet } from "../models/Post.interface";

interface _PostGet extends PostGet {
  edit: boolean;
}

const PostsPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const {
    categorySlug,
    categorys,
    updateSuccess,
    createSuccess,
    deleteSuccess,
  } = useAppSelector((state) => state.category);

  const [categoryId, setCategoryId] = useState<string | undefined>("");

  // const { isError, isLoading, Posts } = useAppSelector((state) => state.post);

  useEffect(() => {
    if (categoryId !== params.slug) {
      dispatch(getPosts(String(params.slug)));
      dispatch(getCategorys());
      setCategoryId(params.slug);
    }
  }, [dispatch, updateSuccess, createSuccess, deleteSuccess, params]);

  // if (isError) return <h1>Error</h1>;
  // if (isLoading) return <h1>Loading....</h1>;

  return (
    <>
      <Scrollspy categorys={categorys} />
    </>
  );
};

export default PostsPage;
