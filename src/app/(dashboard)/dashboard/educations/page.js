import Course from "@/components/education/course";
import Toman from "@/components/icons/toman";
import {AddCircle, ArrowLeft, Box1, InfoCircle} from "iconsax-react";
import Card from "@/components/global/card";
import Link from "next/link";

export default function Page() {
    return <div className="container grid grid-cols-2 gap-6 py-10">
        <Link href="/educations"
            className="border-2 border-dashed border-base-300  bg-base-300/30 col-span-2 rounded-box py-10 px-10 flex flex-col gap-4 items-center">
            <InfoCircle className="w-10 h-10 text-base-content/50"/>
            <span>شما هنوز دوره ای ثبت نام نکرده اید.</span>
            <span className="flex items-center gap-1 font-semibold text-primary">
                <AddCircle className="w-5 h-5 mb-1"/>
                <span>ثبت نام دوره</span>
            </span>
        </Link>

        {
            [1, 2, 3, 4].map(item => <Link href="/dashboard/educations/test"
                                           className="card group card-side bg-base-100 overflow-hidden">
                <figure className="w-80 shrink-0 "><img
                    className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
                    src="/assets/images/educations/education_01.webp"/></figure>
                <div className="card-body py-5 px-7">
                    <h2 className="card-title">دوره آموزشی React</h2>

                    <p>دوره آموزش مفاهیک جامع React بصورت پروژه محور بهترین دوره در زمینه آموزش فرانت اند در
                        خاورمیانه</p>

                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <span className="font-medium">درصد پیشرفت</span>
                            <span>40%</span>
                        </div>
                        <progress className="progress w-full progress-primary" value="40" max="100"></progress>
                    </div>
                </div>
            </Link>)
        }


    </div>
}