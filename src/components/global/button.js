"use client";
const btnVariant = {
    "primary": "btn-primary",
    "secondary": "btn-secondary",
    "error" : "btn-error",
    "success": "btn-success",
    "warning": "btn-warning",
    "ghost": "btn-ghost",
}
export default function Button({children, variant, className}){
    return <button className={`btn h-auto ${btnVariant[variant]} ${className}`}>{children}</button>
}