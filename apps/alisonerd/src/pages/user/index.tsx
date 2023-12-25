import { SpotifyAPI } from '@timothy-alison/shared';

const User = () => {
  SpotifyAPI.getMe().then((res) => {
    console.log(res);
  });
  return <>hi</>;
};
export default User;
