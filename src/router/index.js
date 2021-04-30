import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import InputPengaduan from '../views/InputPengaduan.vue'
import InputAspirasi from '../views/InputAspirasi.vue'
import GetPengaduan from '../views/GetPengaduan.vue'
import GetAspirasi from '../views/GetAspirasi.vue'



Vue.use(VueRouter)


const routes = [
  {
    path: '/register',
    name: 'register',
    components: {default: Register},
  },
  {
    path: '/login',
    name: 'login',
    components: {default: Login},
  },
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/pengaduan',
    name: 'inputpengaduan',
    components: {default: InputPengaduan, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/aspirasi',
    name: 'inputaspirasi',
    components: {default: InputAspirasi, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/getpengaduan',
    name: 'getpengaduan',
    components: {default: GetPengaduan, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/getaspirasi',
    name: 'getaspirasi',
    components: {default: GetAspirasi, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
