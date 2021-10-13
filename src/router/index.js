import Vue from 'vue'
import VueRouter from 'vue-router'

import Create from '@/components/Create'
import Home from '@/components/Home'
import Read from '@/components/Read'
import Edit from '@/components/Edit'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', component: Home },
    { path: '/create', component: Create },
    { path: '/read', component: Read },
    { path: '/edit', component: Edit },
  ]
})

export default router
