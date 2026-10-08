import { createContext, useContext, useState } from 'react';
import wallpaper from '../assets/images/wallpaper.png';

export const wallpapers = [
  { id: 'wallpaper', label: 'Wallpaper', src: wallpaper },
];

const WallpaperContext = createContext(null);

export function WallpaperProvider({ children }) {
  const [wallpaper, setWallpaper] = useState(wallpapers[0]);
  return (
    <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  );
}

export function useWallpaper() {
  const ctx = useContext(WallpaperContext);
  if (!ctx) throw new Error('useWallpaper must be used inside WallpaperProvider');
  return ctx;
}
