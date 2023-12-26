"use client";
import Link from "next/link";

const btnVariant = {
    "primary": "btn-primary",
    "secondary": "btn-secondary",
    "error" : "btn-error",
    "success": "btn-success",
    "warning": "btn-warning",
    "ghost": "btn-ghost",
}
export default function Button({children, variant, className, link}){

    return link ?
        <Link href={link} className={`btn h-auto ${btnVariant[variant]} ${className}`}>{children}</Link>
        : <button className={`btn h-auto ${btnVariant[variant]} ${className}`}>{children}</button>
}