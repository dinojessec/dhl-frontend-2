import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue'),
    },
    {
      path: '/signin',
      name: 'signIn',
      component: () => import('./views/SignIn.vue'),
    },
    {
      path: '/student/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/student/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "register" */ './views/Profile.vue'),
    },
    {
      path: '/admin/students',
      name: 'studentList',
      component: () =>
        import(/* webpackChunkName: "register" */ './views/StudentList.vue'),
    },
    {
      path: '/admin/register',
      name: 'teacherRegister',
      component: () =>
        import(/* webpackChunkName: "register" */ './views/TeacherRegister.vue'),
    },
    {
      path: '/admin/teacher',
      name: 'teacherList',
      component: () => import('./views/TeacherList.vue'),
    },
    {
      path: '/admin/sectioninfo',
      name: 'sectionInfo',
      component: () => import('./components/section/SectionInfo.vue'),
    },
    {
      path: '/admin/registrationform',
      name: 'registrationForm',
      component: () => import('./views/RegistrationForm.vue'),
    },
  ],
});
