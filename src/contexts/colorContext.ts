import { createContext, useContext } from "react";

export interface IColorModeContext {
  colorMode: string;
  setColorMode: (colorMode: string) => void;
}

export const ColorModeContext = createContext<IColorModeContext>({
  colorMode: "dark",
  setColorMode: (colorMode: string) => colorMode,
});
export const useColorMode = () => useContext(ColorModeContext);
