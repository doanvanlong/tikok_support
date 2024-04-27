import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  {
    path: '/',
    component: Index,
    props: (route) => ({
      token: route.query.token,
      id: route.query.id,
    // eslint-disable-next-line comma-dangle
    })
  },
  {
    path: '/product/create',
    component: NotFound,
    props: (route) => ({
      token: route.query.token,
      id: route.query.id,
    // eslint-disable-next-line comma-dangle
    })
  },
  {
    path: '/:path(.*)',
    component: NotFound,
  },
];
export default routes;
