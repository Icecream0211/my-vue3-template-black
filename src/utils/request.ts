/**
 * axios二次封装，目的：
 * 1：使用请求拦截器，可以再请求拦截器中处理一些业务(开始进度条，请求头携带公共参数等)
 * 2：适应响应拦截器，可以再响应拦截器中处理一些业务(进度条结束，简化服务器返回的数据，处理http网络错误)
 *
 */

import axios from 'axios';
import useUserStore from '@/store/modules/user';
//创建axios实例(基础配置，比如：基础路径，超时时间等)
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, //根据实际项目中的路径，进行配置文件修改
    timeout: 5000, //请求超时时间
});

//请求拦截器
request.interceptors.request.use((config) => {
    //config配置对象，headers属性请求头，可以携带公共参数
    let userStore = useUserStore()

    if (userStore.token) {
        config.headers.token = userStore.token
    }
    return config;
});
//响应拦截器
request.interceptors.response.use(
    (res) => {
        if (res.status === 200) {
            return Promise.resolve(res.data)
        } else {
            return Promise.reject(res.data)
        }
    },
    (error) => {
        let message = '';
        let status = error.response.status;
        switch (status) {
            case 401:
                message = 'TOKEN过期';
                break;
            case 403:
                message = '无权访问';
                break;
            case 404:
                message = '请求地址不存在';
                break;
            case 500:
                message = '服务器错误';
                break;
            default:
                message = error.response.data.message;
                break;
        }
        //可以根据自己的前端框架，做提示信息
        //ElMessage.error(message);
        return Promise.reject(error);
    },
);

export default request;
