import { createContext, useState } from "react"
import { darkTheme, lightTheme, opaque, transparent } from "../values/Colors";


export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const theme = isDarkTheme ? darkTheme : lightTheme;
    const completed = isCompleted ? opaque : transparent;

    return (
        <ThemeContext.Provider
            value={{ isDarkTheme, setIsDarkTheme, theme, isCompleted, setIsCompleted, completed }}>
            {props.children}
        </ThemeContext.Provider>
    )
}