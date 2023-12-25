import { useContext } from "react"
import { SpotifyApiAxiosContext } from "../context";

export const useSpotifyApiAxios = () => {
    const context = useContext(SpotifyApiAxiosContext);
    if (!context) {
      throw new Error('useThemes must be used within a ThemesProvider');
    }
    return context;
}