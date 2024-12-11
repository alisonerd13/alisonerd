import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from '../components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        lazy: () => import('./../pages/home'),
      },
      {
        path: 'spotify-analysis',
        lazy: () => import('./../pages/spotify-analysis'),
      },
      {
        path: '*',
        lazy: () => import('./../pages/not-found'),
      },
    ],
  },
]);
export default router;
