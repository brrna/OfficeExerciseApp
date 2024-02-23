import { createContext, useState } from "react"
import { darkTheme, lightTheme, opaque, transparent } from "../values/Colors";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isCompletedCard, setIsCompletedCard] = useState(false);

    const theme = isDarkTheme ? darkTheme : lightTheme;
    const completedStyle = isCompletedCard ? opaque : transparent;

    return (
        <ThemeContext.Provider
            value={{ isDarkTheme, setIsDarkTheme, theme, isCompletedCard, setIsCompletedCard, completedStyle }}>
            {props.children}
        </ThemeContext.Provider>
    )
}