export interface ResponseData {
  code?: number;
  message?: string;
  ok?: boolean;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginResponseData extends ResponseData {
  data: string;
}

export interface UserInfoResponseData extends ResponseData {
  data: {
    routes: string[];
    buttons: string[];
    roles: string[];
    name: string;
    avatar: string;
  };
}
