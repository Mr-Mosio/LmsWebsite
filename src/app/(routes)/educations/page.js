import Course from "@/components/education/course";
import {ArrowLeft, SearchNormal, TickCircle, TickSquare} from "iconsax-react";

export default function Page() {
    return <>
        <div className="space-y-3 col-span-4 text-center bg-gradient-to-r from-accent to-accent-focus text-accent-content py-20">
            <h3 className="text-lg font-semibold text-primary">دوره ها</h3>
            <h4 className="text-3xl font-bold">دوره های کامل و جامع برنامه نویسی</h4>
        </div>
        <div>

            <div className="container flex overflow-x-auto scrollbar-base grid-rows-1 mt-5">
                {[1,2,3,4,5,6].map(item => <div className="w-1/5 shrink-0 px-2 pb-4">
                    <div
                        className="card bg-base-100 group cursor-pointer card-bordered border-transparent hover:border-primary transition-all duration-300">
                        <div className="card-body p-4 flex flex-row items-center gap-3">
                            <div className="avatar">
                                <div
                                    className="w-[4.2rem] absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-primary to-primary-focus mask mask-squircle">
                                </div>
                                <div className="w-16 mask mask-squircle">
                                    <img src="/assets/images/teachers/teacher_01.png"/>
                                </div>
                            </div>
                            <div className="">
                                <div className="text-primary font-medium">مهندس</div>
                                <div className="font-medium">مصطفی فلاحی</div>
                            </div>
                            <div className="mr-auto">
                                <TickSquare
                                    className="w-6 h-6 text-primary transition-all duration-300 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100"/>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>

            <main className="py-10 grid grid-cols-4 gap-6 container">

                <div className="col-span-3 grid grid-cols-3 gap-4 border-base-200">
                    <Course/>
                    <Course/>
                    <Course/>
                </div>
                <aside className="">
                    <div className="border-r-2 border-base-200">
                        <div
                            className="border-r-2 py-1 border-primary px-3 -mr-[2px] font-semibold flex items-center justify-between">
                            دسته بندی ها
                            <button>
                                <SearchNormal className="w-5 h-5"/>
                            </button>
                        </div>
                        <ul className="font-medium">
                            {
                                [1, 2, 3, 4, 5].map(item => <li className="px-3 flex items-center gap-2">
                                    <div className="form-control">
                                        <label className="cursor-pointer label gap-3">
                                            <input type="checkbox"
                                                   className="checkbox checkbox-primary rounded-md checkbox-sm"/>
                                            <span className="label-text">دسته بندی اول</span>
                                        </label>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="border-r-2 border-base-200 pt-5">
                        <div className="border-r-2 border-primary px-3 py-1 -mr-[2px] font-semibold">مرتب سازی بر اساس
                        </div>
                        <ul className="font-medium">
                            {
                                [1, 2, 3, 4, 5].map(item => <li className="px-3 flex items-center gap-2">
                                    <div className="form-control">
                                        <label className="cursor-pointer label gap-3">
                                            <input name="order" type="radio"
                                                   className="radio radio-primary radio-sm"/>
                                            <span className="label-text">جدید ترین</span>
                                        </label>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    </>
}