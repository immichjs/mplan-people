import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

import Create from '@/pages/Create'
import Home from '@/pages/Home'
import Read from '@/pages/Read'
import Edit from '@/pages/Edit'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', component: Home },
    { path: '/create', component: Create },
    { path: '/read', component: Read },
    {
      path: '/edit/:id',
      component: Edit,
      beforeEnter (to, from, next) {
        const checkIfTheUserIdExists = store.state.people.find(person => person.id === Number(to.params.id))
        if (!checkIfTheUserIdExists) next('/read')
        else next()
      }
    },
  ]
})

export default router
