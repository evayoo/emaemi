import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import MomLogin from './components/pages/MomLogin.vue'
import SignupForm from './components/pages/SignupForm.vue'
import MomPage from './components/pages/MomPage.vue'
import SelfAccess from './components/pages/SelfAccess.vue'
import EmiSuggest from './components/pages/EmiSuggest.vue'
import ContactUs from './components/pages/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/mompage',
    name: 'MomPage',
    component: MomPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupForm
  },
  {
    path: '/login',
    name: 'MomLogin',
    component: MomLogin
  },
  {
    path: '/ema',
    name: 'SelfAccess',
    component: SelfAccess
  },
  {
    path: '/emi',
    name: 'EmiSuggest',
    component: EmiSuggest
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'NotFound',
  //   component: NotFound
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router

// add routes here!! and fill in the mompage
