// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext, useEffect, useState } from 'react';

import { RouterProvider } from 'react-router-dom';
import router from '../routes';

export function App() {


  return <RouterProvider router={router}>

  </RouterProvider>;
}

export default App;