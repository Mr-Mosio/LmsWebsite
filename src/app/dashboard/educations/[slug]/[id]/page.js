import Logo from "@/components/global/logo";
import {ArrowLeft, ArrowRight, Eye, HambergerMenu, Import, Star, Star1} from "iconsax-react";
import Player from "@/components/global/Player";

export default function Page() {
    return <div className="flex flex-col min-h-screen">
        <header className="navbar bg-base-100 shadow-lg shadow-base-content/5 flex items-center justify-between">
            <div className="pr-4">
                <label htmlFor="session_list_drawer" className="btn btn-square btn-ghost btn-sm ">
                    <HambergerMenu className="w-6 h-6"/>
                </label>
                <a className="btn btn-ghost hover:bg-transparent">
                    <Logo className="w-32"/>
                </a>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center mr-auto join">
                    <div className="tooltip tooltip-bottom" data-tip="افزودن به علاقه مندی">
                        <button className="btn  btn-square join-item">
                            <Star1 className="w-5 h-5"/>
                        </button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="دانلود">
                        <button className="btn  btn-square join-item">
                            <Import className="w-5 h-5"/>
                        </button>
                    </div>

                </div>
                <div className="flex gap-2 items-center btn px-2">
                    <div className="avatar">
                        <div className="w-9 mask mask-squircle">
                            <img src="/assets/images/teachers/teacher_01.png" alt=""/>
                        </div>
                    </div>
                    <div className="">
                        <div className="font-medium text-xs">مصطفی فلاحی</div>
                        <div className="font-medium text-base-content/60 text-xs">09923444265</div>
                    </div>
                </div>

            </div>
        </header>

        <div className="drawer">
            <input id="session_list_drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-side">
                <label htmlFor="session_list_drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>
            </div>
        </div>

        <main className="py-10 w-full px-5 lg:px-0 lg:w-[45rem] xl:w-[55rem] mx-auto grow">

            <h5 className="text-center text-xl font-bold">عنوان سر فصل</h5>
            <div className="mt-5">
                <div className="rounded-box overflow-hidden">
                    <Player/>
                </div>
            </div>
        </main>
        <footer className="navbar bg-base-100 flex items-center justify-between px-5">
            <button className="btn join-item">
                <ArrowRight className="w-5 h-5"/>
                <span className="">عنوان جلسه قبل</span>
            </button>
            <button className="btn join-item group">
                <span>عنوان جلسه بعد</span>
                <ArrowLeft className="w-5 h-5"/>
            </button>
        </footer>
    </div>
}