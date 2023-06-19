import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LayoutHome',
    component: () =>
      import(/* webpackChunkName: "LayoutHome" */ '@/layout/LayoutHome.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@/pages/Home.vue')
      }
    ]
  },
  {
    path: '/:pathmatch(.*)*',
    name: 'Page404',
    component: () =>
      import(/* webpackChunkName: "Page404" */ '@/pages/Page404.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})
