import Logo from "@/components/global/logo";
import {ArrowDown2} from "iconsax-react";
import Button from "@/components/global/button";

export default function Header() {
    return <header className="sticky z-50 top-0 bg-base-100">
        <div className="container">
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost hover:bg-transparent">
                        <Logo className="w-32" />
                    </a>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details className="group">
                                <summary className="after:hidden">
                                    <span>دسته بندی ها</span>
                                    <ArrowDown2 className="w-3 h-3 transition-all duration-300 group-open:rotate-180" />
                                </summary>
                                <ul className="p-2 w-56">
                                    <li><a>برنامه نویسی</a></li>
                                    <li><a>معارف</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>اساتید</a></li>
                        <li><a>دوره های رایگان</a></li>
                        <li><a>پکیج ها</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-1 navbar-end">
                    <Button variant="ghost" className="px-8 min-h-[2.5rem]">ورود</Button>
                    <Button variant="primary" className="px-8 min-h-[2.5rem]">ثبت نام</Button>
                </div>
            </div>
        </div>

    </header>
}