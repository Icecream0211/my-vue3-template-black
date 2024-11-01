import SvgIcon from '@/components/SvgIcon/index.vue'

/**
 * key和value一样的话，可以简写成  {SvgIcon}
 */
const allGlobalComponent:any = {"SvgIcon":SvgIcon};

//对外报漏插件对象
export default {
    //必须叫install方法，传入app
    install(app:any){
        //注册全部的全局组件
        Object.keys(allGlobalComponent).forEach(key => {
            //注册全局组件
            app.component(key, allGlobalComponent[key])
        })
    }
        
};