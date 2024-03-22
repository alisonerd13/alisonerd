import { useContext } from "react"
import { SpotifyApiAxiosContext } from "../context";

export const useSpotifyStore = () => {
    const context = useContext(SpotifyApiAxiosContext);
    if (!context) {
      throw new Error('useThemes must be used within a ThemesProvider');
    }
    return context;
}