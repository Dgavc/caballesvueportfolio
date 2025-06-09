import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/portfolio/Profile.vue'
import Contact from '../views/portfolio/Contact.vue'

const routes = [

  {
    path: '/portfolio/concerts',
    name: 'Concerts',
    component: () => import('../views/portfolio/Concerts.vue')
  },
  {
    path: '/portfolio/fashion',
    name: 'Fashion',
    component: () => import('../views/portfolio/Fashion.vue')
  },
  {
    path: '/portfolio/portraits',
    name: 'Portraits',
    component: () => import('../views/portfolio/Portraits.vue')
  },

  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/portfolio/profile', component: Profile },
  { path: '/portfolio/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
