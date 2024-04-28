import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';

// eslint-disable-next-line no-unused-vars

import axios from 'axios';

window.axios = axios;
// eslint-disable-next-line import/first
// eslint-disable-next-line import/first

// eslint-disable-next-line import/first
import App from '@/app.vue';

// eslint-disable-next-line import/first
import { routes } from '@/routes.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
