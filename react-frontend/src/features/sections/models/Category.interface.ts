export interface CategoryGet {
  id: string;
  name: string;
  slug: string;
  children: CategoryGet[];
  parent: string;
}

// export default FormConnect;
export interface FormConnect {
  name: string;
  slug: string;
  parent: string;
  id: string;
}
