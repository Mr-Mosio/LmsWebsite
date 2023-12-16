"use client" ;
import ToggleTheme from "@/components/global/toggleTheme";

export default function NotificationBar() {
    return <div className="bg-base-200">
        <div className="container flex items-center text-sm justify-between">
            <div>این وبسایت حاصل تلاش های شبانه روزی منه :)</div>
            <div className="flex items-center gap-1">
                <ul className="menu menu-sm menu-horizontal">
                    <li><a>درباره ما</a></li>
                    <li><a>تماس با ما</a></li>
                </ul>
                <div className="w-px bg-base-content/20 my-2 h-6 shrink-0 ml-4"></div>
                <ToggleTheme />
            </div>
        </div>
    </div>
}