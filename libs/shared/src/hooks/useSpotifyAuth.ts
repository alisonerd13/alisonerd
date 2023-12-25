import { useEffect, useState } from 'react';
import { LocalStorage } from '../utils';

export const useSpotifyAuth = () => {
    const CLIENT_ID = 'bc32cb463496496594cb559ae89546d6';
    const REDIRECT_URI = 'http://localhost:4200/';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';
  const [token, setToken] = useState<string | null>('');
  const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
  useEffect(() => {
    const hash = window.location.hash;
    let token = LocalStorage.get('token');
    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        ?.split('=')[1] || null;
      window.location.hash = '';
      window.localStorage.setItem('token', token || "");
    }

    setToken(token);
  }, []);
  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };
  return { token, logout, loginURL };
};

