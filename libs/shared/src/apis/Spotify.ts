/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosCall } from '../utils';
import { SPOTIFY_ENDPOINT, SPOTIFY_URL } from '../constants';
import { SpotifyUserInfo } from '../context/SpotifyContext/type';


export const SpotifyAPI = {
  // USERS
  getMe: (token:string) => {
    return axiosCall<SpotifyUserInfo>({
      method: 'get',
      url: `${SPOTIFY_URL}${SPOTIFY_ENDPOINT.ME}`,
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
  },
getMyTop: (token:string, topType: string) => {
    return axiosCall<any>({
      method: 'get',
      url: `${SPOTIFY_URL}${SPOTIFY_ENDPOINT.MYTOP}${topType}`,
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
  },

  getUserProfile: (uid: string) => {
    return axiosCall<SpotifyUserInfo>(
      {
        method: 'get',
        url: `${SPOTIFY_URL}${SPOTIFY_ENDPOINT.USER}/${uid}`,
      },
      true
    );
  },
};