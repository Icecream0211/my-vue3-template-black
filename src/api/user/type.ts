
export interface ResponseData{
    code:number,
    message:string
}

export interface LoginFormData {
  username: string;
  password: string;
};


export interface LoginResponseData extends ResponseData{
  data:string;
}

export interface UserInfoResponseData extends ResponseData{
  data:any
}