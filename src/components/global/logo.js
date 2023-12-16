"use client";
import useTheme from "@/contexts/useTheme";
import Image from "next/image";
export default function Logo({className}) {
    const {theme} = useTheme()
    return <img className={className} src={
        theme === "light" ?  "/assets/images/brand/logo-light.png" :"/assets/images/brand/logo-dark.png"
    } alt="" />
}