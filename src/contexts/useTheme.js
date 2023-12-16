"use client" ;

import {createContext, useContext, useState} from "react";
import {getStorage} from "@/utils/utils";

export const ThemeContext = createContext({
    theme: "light",
})

export function ThemeProvider({children}) {
    const context = useContext(ThemeContext)  ;
    const [state, setState] = useState({
        ...context,
        theme : getStorage().getItem("theme") || context.theme
    })

    function setTheme(theme) {
        setState({
            ...state,
            theme,
        })
        getStorage().setItem("theme", theme)
    }

    return <ThemeContext.Provider value={{...state, setTheme}}>
        <main data-theme={state.theme}>
            {children}
        </main>
    </ThemeContext.Provider>
}

export default function useTheme() {
    const {theme, setTheme} = useContext(ThemeContext) ;
    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return  {
        theme,
        toggleTheme
    }
}