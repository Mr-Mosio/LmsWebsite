import {ArrowCircleDown, ArrowLeft, Teacher} from "iconsax-react";
import Card from "@/components/global/card";
import Toman from "@/components/icons/toman";
import Course from "@/components/education/course";

export default function TeacherSinglePage() {
    return <>
        <div className="bg-gradient-to-l from-accent to-accent-focus h-56">
        </div>
        <div className="container flex items-center -mt-16 gap-5">
            <div className="avatar relative">
                <div className="w-[8.5rem] mask mask-squircle bg-base-100  absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"></div>
                <div className="w-32 mask mask-squircle">
                    <img src="/assets/images/teachers/teacher_01.png"/>
                </div>
            </div>
            <div className="space-y-5">
                <span className="text-accent-content font-medium text-lg">مهندس</span>
                <h1 className=" font-bold text-3xl">مصطفی فلاحی</h1>
            </div>
            <div className="grid grid-cols-2 gap-3 mr-auto">
                <div className="aspect-square flex flex-col gap-1 items-center rounded-box bg-base-100 border border-base-300 p-5">
                    <span className="text-xl font-bold text-primary">120</span>
                    <span className="text-sm font-medium">دانش آموز</span>
                </div>
                <div className="aspect-square flex flex-col gap-1 items-center rounded-box bg-base-100 border border-base-300 p-5">
                    <span className="text-xl font-bold text-primary">132</span>
                    <span className="text-sm font-medium">دوره فعال</span>
                </div>
            </div>
        </div>

        <main>
            <div className="container py-20">
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">معرفی استاد</h3>
                    <h4 className="text-3xl font-bold">زندگی نامه مهندس</h4>
                </div>
                <p className="text-justify mt-4 text-lg">
                    اگر در دنیای برنامه‌نویسی تازه‌وارد هستید، یادگیری طراحی وب برای شما دوست داشتنی و نسبتا ساده است.
                    برای کسب‌وکارهای بزرگ، طراحی سایت با استفاده از زبان‌های برنامه‌نویسی وب جذابیت و اهمیت زیادی دارد.
                    بنابراین با یک جستجوی ساده در بین آگهی‌های استخدامی متوجه داغ بودن بازار این حوزه و نیاز شرکت‌ها به
                    طراح وب حرفه‌ای می‌شویم. در چنین شرایطی، یادگیری طراحی وب نویدبخش کسب درآمد بالا و حتی همکاری با
                    شرکت‌های خارجی و کسب درآمد ارزی خواهد بود.

                    اگر با مفاهیم برنامه نویسی آشنا نیستی و قصد شرکت در دوره آموزش طراحی سایت را داری، پیشنهاد می‌کنیم
                    ابتدا در دوره آموزش برنامه نویسی مقدماتی لقمان آوند شرکت کنی و بعد از آن مسیر یادگیری برنامه نویسی
                    را به درستی انتخاب کنی.

                    دوره‌ متخصص طراحی وب با هدف تدریس تمامی مباحث و سرفصل‌های لازم برای تسلط و آمادگی دانشجویان جهت ورود
                    به بازار کار ارائه شده است. در این دوره‌‌ کامل‌ترین سرفصل‌های طراحی وب به صورت غیرحضوری تدریس
                    می‌شوند.
                </p>
                <div className="flex justify-center mt-2">
                    <button className="inline-flex items-center justify-center gap-2 text-primary font-medium mx-auto">
                        <ArrowCircleDown className="w-5 h-5"/>
                        <span>مشاهده بیشتر</span>
                    </button>
                </div>
            </div>
            <section className="py-16">
                <div className="container">
                    <div className="flex items-end justify-between">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-primary">دوره ها</h3>
                            <h4 className="text-3xl font-bold">دوره های کامل و جامع برنامه نویسی</h4>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                            <a href="#" className="text-primary flex items-center group transition-all duration-300">
                                <span>مشاهده همه</span>
                                <ArrowLeft
                                    className="w-5 h-5 transition-all duration-300 translate-x-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-x-1.5"/>
                            </a>
                            <div className="tabs tabs-boxed tabs-categories rounded-full">
                                <div className="rounded-full tab tab-active">فرانت اند</div>
                                <div className="rounded-full tab">بک اند</div>
                                <div className="rounded-full tab">پروژه محور</div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-4 divide-x divide-x-reverse divide-dashed divide-base-300">
                        {[1, 2, 3, 4].map(item => <Course className="px-3" />)}
                    </div>
                </div>
            </section>
        </main>

    </>
}