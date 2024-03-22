import { SpotifyAPI } from '../../apis';
import { LocalStorage } from '../../utils';
import { Dispatch, UserViaSpotify } from './type';


export const buildActions = (dispatch: Dispatch) => {
  return {
    logout: () => {
      LocalStorage.delete('spotifyToken')
      dispatch({ type: 'logout' });
    },
    loginCheck: async (payload:string) => { 
      dispatch({ type: 'login_check_pending' });
      const [error, res] = await SpotifyAPI.getMe(payload)
      if (!error) {
        LocalStorage.set('spotifyToken',payload)
        dispatch({type:'login_check_fulfilled', payload:{
          token:payload,
          ...res
        } as unknown as UserViaSpotify})
      } else if (error?.response?.status===401){
        LocalStorage.delete('spotifyToken')
        dispatch({type:'login_check_rejected', payload:error.message})
      }
    },
  };
};
