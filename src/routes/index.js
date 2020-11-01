import { lazy } from 'react';

const routes = {
  Root: {
    path: `/`,
    component: lazy(() => import('../components/Login')),
  },
};

export default routes;
