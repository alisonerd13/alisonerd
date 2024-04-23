/* eslint-disable @typescript-eslint/no-explicit-any */
export type Dispatch = (action: Action) => void;
export type State = {
  user: UserViaSpotify | undefined
  isAuth: boolean;
  isFetching: boolean;
  error: string;
};
export type UserViaSpotify = {
    token: string | null | undefined;
  } & SpotifyUserInfo;

export type SpotifyProviderProps = { children: React.ReactNode };

export type SpotifyUserInfo =
  | {
      display_name: string;
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string;
        total: 0;
      };
      href: string;
      id: string;
      images: [
        {
          url: string;
          height: number;
          width: number;
        }
      ];
      type: string;
      uri: string;
      myTopTrack:any;
    }
  | undefined;

export type LoginCheckCase =
  | { type: 'login_check_pending' }
  | { type: 'login_check_fulfilled'; payload: UserViaSpotify }
  | { type: 'login_check_rejected';payload: string };

export type GetSpotifyData =
  | { type: 'get_my_top_track_pending' }
  | { type: 'get_my_top_track_fulfilled'; payload: any }
  | { type: 'get_my_top_track_rejected';payload: string };


export type Action = LoginCheckCase | GetSpotifyData | { type: 'logout' };
