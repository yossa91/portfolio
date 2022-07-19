
import home from '../views/intro-home.vue';

export const routes = [
    {
        path : '/',
        name : 'home',
        component : home
    },{ 
        path : '/about',
        name : 'about',
        component : () => import('../views/about-maker.vue')
    }
]


export default routes