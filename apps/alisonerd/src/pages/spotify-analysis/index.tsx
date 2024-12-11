import { useSpotifyStore } from '@timothy-alison/shared';
import React, { useEffect } from 'react';

const CLIENT_ID = 'bc32cb463496496594cb559ae89546d6';
const REDIRECT_URI = 'http://localhost:4200/';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

const SpotifyAnalysis = () => {
  const {
    actions: { logout, loginCheck },
    state: {
      isAuth,
      user: { ...spotifyUser },
    },
  } = useSpotifyStore();
  useEffect(() => {
    spotifyUser.token && loginCheck(spotifyUser.token);
  }, [spotifyUser.token]);

  return !isAuth ? (
    <div>
      <a href={loginURL}>login</a>
      <div></div>
    </div>
  ) : (
    <div>
      <div>Name: {spotifyUser.display_name}</div>{' '}
      <div>
        <button onClick={logout}> LogOut</button>
      </div>
    </div>
  );
};
export const Component = SpotifyAnalysis;
