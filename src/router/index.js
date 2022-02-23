import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import SingleProductListing from '../components/SingleProduct'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/singleProductListing',
      name: 'singleProductListing',
      component: SingleProductListing,
    },
  ],
})
