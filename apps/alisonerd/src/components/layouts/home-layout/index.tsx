import { Outlet } from 'react-router-dom';
import Nav from '../nav';

const HomeLayout: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default HomeLayout;
