import request from "@/utils/request";
import type { LoginFormData, LoginResponseData,UserInfoResponseData} from "./type";
enum API{
    LOGIN_URL = '/user/login',
    USER_INFO_URL = '/user/info',
    MODIFY_USER_URL = '/user/modifyUser',
    ADD_USER_URL = '/user/addUser'
}




export const login = (data:LoginFormData)=> request.post<any,LoginResponseData>(API.LOGIN_URL,data);

export const getUserInfo = ()=> request.get<any,UserInfoResponseData>(API.USER_INFO_URL);


export const modifyUser = (data:any)=> request.put(API.MODIFY_USER_URL,data);

export const addUser = (data:any)=> request.post(API.ADD_USER_URL,data);

export const deleteUser = (id:number)=> request.delete(`/user/deleteUser/${id}`);