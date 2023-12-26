"use client"
import Link from "next/link";
import {ArrowLeft, Facebook, Instagram, Whatsapp} from "iconsax-react";
import Logo, {DarkLogo} from "@/components/global/logo";

export default function Footer() {
    return <footer className="bg-base-200">
        <div className="container py-10">
            {/*<div className="grid grid-cols-4 gap-4 w-full">*/}
            {/*    {[1, 2, 3, 4].map(item => <div>*/}
            {/*        <div className=" border-r-2 border-primary px-3 font-bold text-primary text-xl">*/}
            {/*            250*/}
            {/*        </div>*/}
            {/*        <div className="px-3 mt-2">*/}
            {/*            دوره و پکیچ*/}
            {/*        </div>*/}
            {/*    </div>)}*/}
            {/*</div>*/}
            <div className="grid grid-cols-3 gap-4 w-full mt-5">
                <div className="grid grid-cols-2 gap-4 gap-y-3">
                    <div className="text-primary font-semibold text-lg col-span-2 px-2 border-r-2 border-primary">دسترسی
                        سریع
                    </div>
                    <ul className="flex flex-col gap-1 px-2">
                        <li>
                            <Link href="" className="inline-flex items-center group ">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">صفحه اصلی</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="inline-flex items-center group ">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">دوره ها</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="inline-flex items-center group ">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">اساتید</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="inline-flex items-center group ">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">درباره ما</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-1 px-2">
                        <li>
                            <Link href="" className="inline-flex items-center group ">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">قوانین و شرایط</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="inline-flex items-center group ">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">سوالات متداول</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="inline-flex items-center group ">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">درباره ما</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="inline-flex items-center group">
                                <ArrowLeft
                                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0 translate-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible"/>
                                <span
                                    className="transition-all duration-300 translate-x-4 group-hover:-translate-x-1">تماس با ما</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="text-primary font-semibold text-lg col-span-2 px-2 border-r-2 border-primary">راه
                        های ارتباطی
                    </div>
                    <ul className="flex flex-wrap gap-2 mt-4">
                        <li>
                            <a href="#" className="btn btn-square btn-sm">
                                <Facebook variant="Bold" className="w-6 h-6"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="btn btn-square btn-sm">
                                <Instagram variant="Bold" className="w-6 h-6"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="btn btn-square btn-sm">
                                <Whatsapp variant="Bold" className="w-6 h-6"/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="bg-base-300 w-full text-base-content">
            {/*<div className="container">*/}
            {/*    <div className="w-full border-b-2 border-base-content/10 py-4">*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div className="container flex items-center justify-between py-5">
                <Logo className="w-32"/>
                <p>تمای حقوق این وبسایت متعلق به ای تی سان میباشد.</p>
            </div>
        </div>
    </footer>
}