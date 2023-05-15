export interface PostGet {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_date: string;
  updated_date: string;
  category: string;
}

// export default PostGet;

// export default FormConnect;
export interface FormConnect {
  name: string;
  slug: string;
  description: string;
  id: string | undefined;
  category: string | undefined;
}
