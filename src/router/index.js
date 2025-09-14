import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Recommendations from '@/views/Recommendations.vue'
import MovieCard from '@/components/MovieCard.vue'
import Search from '@/components/Search.vue'
import Profile from '@/views/Profile.vue'
import Signup from '@/views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
   {
    path: '/recommendations',
    name: 'Recommendations',
    component: Recommendations
  },
    {
    path: '/search',
    name: 'Search',
    component: Search
  },
    {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
   {
    path: '/home',
    name: 'home',
    component: Home
  }
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
