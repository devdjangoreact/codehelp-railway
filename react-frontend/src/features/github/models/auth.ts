export interface LoginModel {
  username: string;
  password: string;
}

export interface RegisterModel {
  username: string;
  password: string;
  re_password: string;
}

export interface Root<T> {
  success: string;
  data: T[];
}

export interface Data {
  id: number;
  username: string;
  email: string;
  name: string;
  isAdmin: boolean;
  groups: Group[];
  last_login: string;
  is_superuser: boolean;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  user_permissions: any[];
  refreshToken: string;
  accessToken: string;
  ability: Ability[];
  user_profile: UserProfile;
}

export interface Group {
  id: number;
  name: string;
  permissions: number[];
}

export interface Ability {
  action: string;
  subject: string;
}

export interface UserProfile {
  id: number;
  phone: string;
  city: string;
  first_name: string;
  last_name: string;
  updated_date: string;
  user: number;
}
