import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostListView from '@/views/posts/PostListView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/posts/create',
    component: PostCreateView
  },
  {
    path: '/posts/',
    component: PostListView
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView
  },
  {
    path: '/posts/:id',
    component: PostDetailView
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})
export default router
