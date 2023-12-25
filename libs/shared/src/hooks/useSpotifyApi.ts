import { useContext } from "react"
import SpotifyApiContext from "../context/SpotifyContext";

export const useSpotifyApi = () => {
    const context = useContext(SpotifyApiContext);
    if (!context) {
      throw new Error('useThemes must be used within a ThemesProvider');
    }
    return context;
}