import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {
  SpotifyProvider,
  ThemeProvider,
  combineComponents,
} from '@timothy-alison/shared';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const providers = [ThemeProvider, SpotifyProvider];
const AppContextProvider = combineComponents(...providers);

root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
