import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { SpotifyProvider, ThemeProvider } from '@timothy-alison/shared';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <SpotifyProvider>
        <App />
      </SpotifyProvider>
    </ThemeProvider>
  </StrictMode>
);
