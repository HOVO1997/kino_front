import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";


import Home from "@/components/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Show from "@/components/Show";
import Notfound from "@/components/Notfound";
import Catalog from "@/components/Catalog";

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: {name: 'home'}},
        {path: '/home', component: Home, name: 'home'},
        {path: '/login', component: Login, name: 'login'},
        {path: '/register', component: Register, name: 'register'},
        {path: '/show', component: Show, name: 'show'},
        {path: '/catalog',component: Catalog, name: 'catalog'},
        {path: '/404', name: '404', component: Notfound,},
        {path: '*', redirect: '/404'}
    ]
})


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
