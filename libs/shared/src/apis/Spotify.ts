import { axiosCall } from '../utils';
import { UserInfo } from '../types';
import { SPOTIFY_ENDPOINT, SPOTIFY_URL } from '../constants';


export const SpotifyAPI = {
  // USERS
  getMe: () => {
    return axiosCall<UserInfo>({
      method: 'get',
      url: `${SPOTIFY_URL}${SPOTIFY_ENDPOINT.ME}`,
    });
  },
  getUserProfile: (uid: string) => {
    return axiosCall<UserInfo>(
      {
        method: 'get',
        url: `${SPOTIFY_URL}${SPOTIFY_ENDPOINT.USER}/${uid}`,
      },
      true
    );
  },
};