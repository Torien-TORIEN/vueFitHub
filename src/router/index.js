// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../views/Home.vue';
import LoginComponent from '../views/Login.vue';
import RegisterComponent from '../views/Register.vue';
import ProfileComponent from '../components/userComponents/Profile.vue';
import AuthService from '../services/AuthService';

const routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/register',
    component: RegisterComponent
  },
  {
    path: '/profile',
    component: ProfileComponent,
    meta: { requiresAuth: true } // AuthGuard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// AuthGuard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!AuthService.isAuthenticated()) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
