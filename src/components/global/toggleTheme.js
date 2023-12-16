"use client";

import {Moon, Sun, Sun1} from "iconsax-react";
import useTheme from "@/contexts/useTheme";

export default function ToggleTheme() {
    const {toggleTheme, theme} = useTheme()
    return <label  className="swap swap-rotate">
        <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} className="hidden" />

        <Sun1 className="w-5 h-5 swap-off" />
        <Moon className="w-5 h-5 swap-on" />
    </label>
}