/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { SpotifyAPI } from '../apis';
type SpotifyApiAxiosContextProp = {
  token: string | null;
  SpotifyAPI: object;
};
export const SpotifyApiAxiosContext = createContext<SpotifyApiAxiosContextProp>(
  {
    token: '',
    SpotifyAPI: SpotifyAPI,
  }
);

export default SpotifyApiAxiosContext;
