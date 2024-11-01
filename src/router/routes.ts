export const constantRoute = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'Login',
    },
    {
        path: '/',
        redirect: '/home',
        name: 'layout',
    },
    {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
    }
];

/**
 * 放置写在 views中的其他路由配置，然后用于匹配用户登录以后的权限
 */
export const asyncRoute = [
];


export const anyRoute = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
    },
];
