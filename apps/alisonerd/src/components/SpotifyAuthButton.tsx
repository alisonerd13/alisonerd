import useSpotifyAuth from "../hooks/useSpotifyAuth";

const SpotifyAuthButton = () => {    
    const {token, logout, loginURL} = useSpotifyAuth()
    return !token ? (
        <a
          href={loginURL}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

export default SpotifyAuthButton