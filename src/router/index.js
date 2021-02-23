import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about'
import CssTest from "../views/CssTest";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/css',
    name: 'CssTest',
    component: CssTest
  },

]

const router = new VueRouter({
  routes
})

export default router
