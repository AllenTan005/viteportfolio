import { createRouter, createWebHistory } from "vue-router";

import netlify from '../view/netlify.vue'
import homepage from '../view/homepage.vue'

const routes = [

    {
        path:'/netlify',
        name:'netlify',
        component:netlify

    },
    
    {
        path:'/homepage',
        name:'homepage',
        component:homepage

    },


    {
        path: '/',
        redirect: { path: '/homepage' }
      },


]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router