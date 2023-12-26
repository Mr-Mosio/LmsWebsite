import Toman from "@/components/icons/toman";
import {ArrowCircleDown, ArrowDown, ArrowLeft, HambergerMenu, MenuBoard, Teacher} from "iconsax-react";
import Button from "@/components/global/button";
import Player from "@/components/global/Player";

export default function EducationSinglePage() {
    return <>
        <div className="bg-gradient-to-l from-accent to-accent-focus text-accent-content py-20">
            <div className="container grid grid-cols-2 gap-12">

                <div className="flex flex-col py-10">
                    <h1 className="text-3xl font-bold">دوره جامع آموزش React</h1>
                    <p className="text-lg mt-6">
                        دوره آموزش مفاهیک جامع React بصورت پروژه محور بهترین دوره در زمینه آموزش فرانت اند در
                        خاورمیانه
                    </p>
                    <div className="grid grid-cols-3 my-auto">
                        <div className="">
                            <div className="px-2 border-r-2 border-primary text-primary font-bold text-xl">20</div>
                            <div className="px-2 mt-2">تعداد جلسات</div>
                        </div>
                        <div className="">
                            <div className="px-2 border-r-2 border-primary text-primary font-bold text-xl">300 دقیقه
                            </div>
                            <div className="px-2 mt-2">مدت زمان دوره</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full ">

                        <div className="flex gap-3 mt-2 items-center">
                            <div className="avatar">
                                <div className="w-20 mask mask-squircle">
                                    <img src="/assets/images/teachers/teacher_01.png" alt=""/>
                                </div>
                            </div>
                            <div className=" text-lg">
                                <div className="text-primary font-medium">مهندس</div>
                                <div className="font-medium">مصطفی فلاحی</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-1 pt-3">
                            <div>
                                <div className="flex items-center gap-1 font-medium text-lg">
                                    <span>200,000</span>
                                    <Toman className="w-5 h-5"/>
                                </div>
                            </div>
                            <Button variant="primary" className="px-8">
                                <span>ثبت نام در دوره</span>
                            </Button>
                        </div>
                    </div>

                </div>

                <div>
                <div className="w-full rounded-box aspect-video overflow-hidden">
                        <Player />
                    </div>
                </div>

            </div>
        </div>

        <main className="">
            <div className="container py-20">
                <div className="space-y-3 ">
                    <h3 className="text-lg font-semibold text-primary">معرفی دوره</h3>
                    <h4 className="text-3xl font-bold">چرا دوره جامع ما</h4>
                </div>
                <p className="text-justify mt-4 text-lg">
                    اگر در دنیای برنامه‌نویسی تازه‌وارد هستید، یادگیری طراحی وب برای شما دوست داشتنی و نسبتا ساده است. برای کسب‌وکارهای بزرگ، طراحی سایت با استفاده از زبان‌های برنامه‌نویسی وب جذابیت و اهمیت زیادی دارد. بنابراین با یک جستجوی ساده در بین آگهی‌های استخدامی متوجه داغ بودن بازار این حوزه و نیاز شرکت‌ها به طراح وب حرفه‌ای می‌شویم. در چنین شرایطی، یادگیری طراحی وب نویدبخش کسب درآمد بالا و حتی همکاری با شرکت‌های خارجی و کسب درآمد ارزی خواهد بود.

                    اگر با مفاهیم برنامه نویسی آشنا نیستی و قصد شرکت در دوره آموزش طراحی سایت را داری، پیشنهاد می‌کنیم ابتدا در دوره آموزش برنامه نویسی مقدماتی لقمان آوند شرکت کنی و بعد از آن مسیر یادگیری برنامه نویسی را به درستی انتخاب کنی.

                    دوره‌ متخصص طراحی وب با هدف تدریس تمامی مباحث و سرفصل‌های لازم برای تسلط و آمادگی دانشجویان جهت ورود به بازار کار ارائه شده است. در این دوره‌‌ کامل‌ترین سرفصل‌های طراحی وب به صورت غیرحضوری تدریس می‌شوند.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    {[1,2,3,4,5].map(item => <div className="border-r border-dashed border-base-300">
                        <div className="pr-5">
                            <Teacher variant="Bulk" className="w-12 h-12 text-primary-focus"/>
                        </div>
                        <h4 className="border-r-2 border-primary mt-3 -mr-px text-xl font-semibold px-5">برترین
                            اساتید</h4>
                        <p className="px-5 mt-2">قیمت‌های اقتصادی و رقابتی ابر آروان به شما این امکان را می‌دهد تا با هر
                            بودجه‌ای مناسب‌ترین سرویس را تهیه کنید.</p>
                    </div>)}
                </div>
            </div>

            <div className="bg-base-200 py-20">
                <div className="w-1/2 mx-auto relative">
                    <div className="space-y-3 text-center">
                        <h3 className="text-lg font-semibold text-primary">سرفصل ها</h3>
                        <h4 className="text-3xl font-bold">لیست تمامی سرفصل های جلسات</h4>
                    </div>
                    <div className="relative h-96 overflow-hidden">
                        <div className="mt-10 space-y-2">
                            {[1, 2, 3, 4, 5].map(item => <div tabIndex={0}
                                                              className="collapse collapse-plus border border-base-300 bg-base-100">
                                <div className="collapse-title text-lg font-medium flex items-center gap-3">
                                    <HambergerMenu className="w-7 h-7 text-primary-focus mb-1"/>
                                    <div>مقدمات شروع طراحی وب و کدنویسی</div>
                                </div>
                                <div className="collapse-content">
                                    <ul className="ps-5">
                                        {[1, 2, 4, 5, 6].map(item => <li
                                            className="flex items-center gap-2 pr-4 after:w-0.5 after:h-4 after:absolute after:right-1 after:translate-x-1/3 last:after:hidden after:top-1/2 after:translate-y-3 after:bg-base-200 relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-primary before:right-0 before:top-1/2 before:-translate-y-1/2 py-2">
                                            <span className="font-semibold text-primary">جلسه اول</span>
                                            <span> آشنایی با ابزارهای مورد نیاز یک طراحی وب و معرفی انواع مرورگر‌های محبوب</span>
                                            <span className="mr-auto text-sm text-base-content/60">12 دقیقه</span>
                                        </li>)}
                                    </ul>
                                </div>
                            </div>)}
                        </div>
                        <div
                            className="bg-gradient-to-b from-transparent to-base-200 absolute bottom-0 top-1/2 inset-x-0 z-10 flex items-end justify-center">
                            <button className=" flex flex-col items-center group text-primary gap-1 font-medium">
                                <ArrowCircleDown className="w-7 h-7 text-primary transition duration-300 group-hover:scale-105"/>
                                <span>مشاهده بیشتر</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMMENTS */}
            <div className="w-1/2 mx-auto py-20">
                <div className="space-y-3 text-center">
                    <h3 className="text-lg font-semibold text-primary">نظرات</h3>
                    <h4 className="text-3xl font-bold">دیدگاه کاربران درمورد این دوره</h4>
                </div>
                <form action="/" className="mt-5">
                    <div className="grid grid-cols-2 gap-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">نام و نام خانوادگی</span>
                            </div>
                            <input type="text" placeholder="نام شما" className="input w-full bg-base-200"/>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">شماره موبایل</span>
                            </div>
                            <input type="text" placeholder="نام شما" className="input w-full bg-base-200"/>
                        </label>
                        <label className="form-control w-full col-span-2">
                            <div className="label">
                                <span className="label-text">نظر شما</span>
                            </div>
                            <textarea placeholder="نام شما" className="textarea min-h-32 resize-none w-full bg-base-200"></textarea>
                        </label>
                        <div className="flex items-center col-span-2 justify-center">
                            <Button variant="primary" className="px-20">ثبت نظر</Button>
                        </div>
                    </div>
                </form>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 ">
                        <div>
                            <div className="avatar">
                                <div className="w-14 mask mask-squircle">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col justify-center">
                                    <span className="font-semibold">مصطفی فلاحی</span>
                                    <span className="text-sm font-medium text-primary">دانش آموز دوره</span>
                                </div>
                                <span className="text-sm text-base-content/70">سه شنبه 3 دی 1402</span>
                            </div>
                            <div className="mt-3 card card-bordered w-full">
                                <div className="card-body text-justify">
                                    <p>سلام وقتتون بخیر باشه یه سوالی داشتم ازتون اینکه داخل شهر های بزرگ افراد یا شرکت
                                        هایی پیدا میشن که روی ایده ای که داخل کشور خودمون قابل اجرا نیستن یا کمتر قابلیت
                                        اجرا شدن داشته باشن و باید در کشور های دیگه اون ایده رو به اجرا دراورد سرمایه
                                        گذاری کنن ؟؟؟</p>
                                </div>
                            </div>
                            <ul className="mt-3 space-y-3">
                                <li className="flex items-start gap-3">
                                    <div>
                                        <div className="avatar">
                                            <div className="w-14 mask mask-squircle">
                                                <img
                                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2 w-full">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col justify-center">
                                                <span className="font-semibold">مصطفی فلاحی</span>
                                                <span className="text-sm font-medium text-primary">دانش آموز دوره</span>
                                            </div>
                                            <span className="text-sm text-base-content/70">سه شنبه 3 دی 1402</span>
                                        </div>
                                        <div className="mt-3 card bg-base-200 w-full">
                                            <div className="card-body text-justify">
                                                <p>سلام وقتتون بخیر باشه یه سوالی داشتم ازتون اینکه داخل شهر های بزرگ
                                                    افراد یا شرکت هایی پیدا میشن که روی ایده ای که داخل کشور خودمون قابل
                                                    اجرا نیستن یا کمتر قابلیت اجرا شدن داشته باشن و باید در کشور های
                                                    دیگه اون ایده رو به اجرا دراورد سرمایه گذاری کنن ؟؟؟</p>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="flex items-start gap-3 ">
                        <div>
                            <div className="avatar">
                                <div className="w-14 mask mask-squircle">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col justify-center">
                                    <span className="font-semibold">مصطفی فلاحی</span>
                                    <span className="text-sm font-medium text-primary">دانش آموز دوره</span>
                                </div>
                                <span className="text-sm text-base-content/70">سه شنبه 3 دی 1402</span>
                            </div>
                            <div className="mt-3 card card-bordered w-full">
                                <div className="card-body text-justify">
                                    <p>سلام وقتتون بخیر باشه یه سوالی داشتم ازتون اینکه داخل شهر های بزرگ افراد یا شرکت
                                        هایی پیدا میشن که روی ایده ای که داخل کشور خودمون قابل اجرا نیستن یا کمتر قابلیت
                                        اجرا شدن داشته باشن و باید در کشور های دیگه اون ایده رو به اجرا دراورد سرمایه
                                        گذاری کنن ؟؟؟</p>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li className="flex items-start gap-3 ">
                        <div>
                            <div className="avatar">
                                <div className="w-14 mask mask-squircle">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col justify-center">
                                    <span className="font-semibold">مصطفی فلاحی</span>
                                    <span className="text-sm font-medium text-primary">دانش آموز دوره</span>
                                </div>
                                <span className="text-sm text-base-content/70">سه شنبه 3 دی 1402</span>
                            </div>
                            <div className="mt-3 card card-bordered w-full">
                                <div className="card-body text-justify">
                                    <p>سلام وقتتون بخیر باشه یه سوالی داشتم ازتون اینکه داخل شهر های بزرگ افراد یا شرکت
                                        هایی پیدا میشن که روی ایده ای که داخل کشور خودمون قابل اجرا نیستن یا کمتر قابلیت
                                        اجرا شدن داشته باشن و باید در کشور های دیگه اون ایده رو به اجرا دراورد سرمایه
                                        گذاری کنن ؟؟؟</p>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>

        </main>


    </>
}