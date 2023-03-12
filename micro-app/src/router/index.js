import HelloWorld from '@/components/HelloWorld.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/a',
    name: 'home',
    component: HelloWorld,
  },
  {
    path: '/b',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/HelloWorldA.vue'),
  },
]

export default routes
