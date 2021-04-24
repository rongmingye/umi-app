import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/index'},
    {
      path: '/', 
      component: '@/pages/index', 
      routes: [
        { path: '/user', component: '@/pages/user/index'},
      ]
    },
  ],
  fastRefresh: {},
})
