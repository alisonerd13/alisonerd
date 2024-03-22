/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer } from 'react';
import { Action, Dispatch, SpotifyProviderProps, State } from './type';
import { buildActions } from './action';
import { LocalStorage } from '../../utils';
type SpotifyApiAxiosContextProp = {
  state: State;
  dispatch: Dispatch;
  actions: ReturnType<typeof buildActions>;
};

const initToken = () => {
  const hash = window.location.hash;
  let token = LocalStorage.get('spotifyToken');
  if (!token && hash) {
    token =
      hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        ?.split('=')[1] || null;
    window.location.hash = '';
  }
  return token;
};

const initState: State = {
  error: '',
  isFetching: false,
  isAuth: false,
  user: {
    token: initToken(),
    display_name: '',
    external_urls: {
      spotify: '',
    },
    followers: {
      href: '',
      total: 0,
    },
    href: '',
    id: '',
    images: [
      {
        url: '',
        height: 0,
        width: 0,
      },
    ],
    type: '',
    uri: '',
  },
};
export const SpotifyApiAxiosContext = createContext<
  SpotifyApiAxiosContextProp | undefined
>(undefined);

export default SpotifyApiAxiosContext;

export const spotifyReducer = (state: State, action: Action): State => {
  const currentState = { ...state };
  switch (action.type) {
    case 'login_check_pending': {
      currentState.isFetching = true;
      break;
    }
    case 'login_check_fulfilled': {
      currentState.isFetching = false;
      currentState.user = action.payload;
      currentState.isAuth = true;
      currentState.error = '';
      break;
    }
    case 'login_check_rejected': {
      currentState.isFetching = false;
      currentState.isAuth = false;
      currentState.user = initState.user;
      currentState.error = action.payload;
      break;
    }
    case 'logout': {
      currentState.isAuth = false;
      currentState.user = initState.user;
      break;
    }
    // SOMETHING HERE
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }

  return currentState;
};

export const SpotifyProvider = ({ children }: SpotifyProviderProps) => {
  const [state, dispatch] = useReducer(spotifyReducer, initState);
  const actions = buildActions(dispatch);
  const value = { state, dispatch, actions };
  return (
    <SpotifyApiAxiosContext.Provider value={value}>
      {children}
    </SpotifyApiAxiosContext.Provider>
  );
};
