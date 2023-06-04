import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfileView from '../views/ProfileView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        transitionEnter: 'animate__animated animate__fadeInUp',
        transitionLeave: 'animate__animated animate__fadeOut',
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        transitionEnter: 'animate__animated animate__fadeIn',
        transitionLeave: 'animate__animated animate__fadeOut',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        transitionEnter: 'animate__animated animate__fadeInUp',
        transitionLeave: 'animate__animated animate__fadeOut',
      },
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
      meta: {
        transitionEnter: 'animate__animated animate__fadeInUp',
        transitionLeave: 'animate__animated animate__fadeOut',
      },
    },
  ],
});

export default router;
