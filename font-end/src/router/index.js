import Vue from 'vue';
import Router from 'vue-router';

import AppWelcome from '../components/AppWelcome.vue';
import AppLogin from '../components/AppLogin.vue';
import AppStudent from '../components/AppStudent.vue';
import AppTeacher from '../components/AppTeacher.vue';
import RootManage from '../components/RootManage.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'AppWelcome',
      component: AppWelcome,

    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
      children: [{
          path: 'teacher',
          name: 'AppTeacher',
          component: AppTeacher,
        },
        {
          path: 'student',
          name: 'AppStudent',
          component: AppStudent,
        },
      ]
    },
    {
      path: '/rootManage',
      name: 'RootManage',
      component: RootManage,
    },
    // {path:'*',component:NotFound},//全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
  ]
});

// export default router;