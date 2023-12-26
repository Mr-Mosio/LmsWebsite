"use client";
import useTheme from "@/contexts/useTheme";
import Image from "next/image";
export default function Logo({className}) {
    const {theme} = useTheme()
    return <img className={className} src={
        theme === "light" ?  "/assets/images/brand/logo-light.png" :"/assets/images/brand/logo-dark.png"
    } alt="" />
}
export function DarkLogo({className}) {
    return <img className={className} src={"/assets/images/brand/logo-dark.png"} alt="" />
}

export function LightLogo({className}) {
    return <img className={className} src={"/assets/images/brand/logo-light.png"} alt="" />
}