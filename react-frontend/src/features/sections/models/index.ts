import { PostGet } from "./Post.interface";
import { CategoryGet } from "./Category.interface";

// const model = { CategoryGet, PostGet };

// export const PostsPage = () => [  PostGet  CategoryGet]

export type TypeModels = CategoryGet | PostGet[] | null;
