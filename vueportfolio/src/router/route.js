
import home from '../views/intro-home.vue';

export const routes = [
    {
        path : '/', 
        redirect : '/home',
    },{
        path : '/home',
        name : 'home',
        component : home
    },{ 
        path : '/about',
        name : 'about',
        component : () => import('../views/about-maker.vue')
    },{ 
        path : '/renewal',
        name : 'renewal',
        component : () => import('../views/renewal-project.vue')
    },{ 
        path : '/clone',
        name : 'clone',
        component : () => import('../views/clone-project.vue')
    },{ 
        path : '/design',
        name : 'design',
        component : () => import('../views/design-project.vue')
    },{ 
        path : '/contact',
        name : 'contact',
        component : () => import('../views/contact-page.vue')
    }

]


export default routes