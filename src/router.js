// Lbrairies
import Vue from 'vue'
import Router from 'vue-router'

// Vues
import Home from './views/Home.vue'
import Form from './views/Form.vue'
import About from './views/About'

// Ajout module vue-routeur à l'application
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/form',
        name: 'form',
        component: Form
    },
    {
      path: '/about',
      name: 'about',
        component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
