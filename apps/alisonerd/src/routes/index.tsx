import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';

const router = createBrowserRouter([
  {
    element: <>layout</>,
    children: [
      { path: ':lang', children: [{ path: '', element: <Home /> }] },
      {
        path: '*',
        element: <Navigate to="/en" replace />,
      },
    ],
  },
]);
export default router;
