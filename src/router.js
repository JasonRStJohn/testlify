import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/our-team',
      name: 'about',
      component: About
    }
  ]
})
