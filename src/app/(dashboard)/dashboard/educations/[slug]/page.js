import Toman from "@/components/icons/toman";
import {Clock, Eye, Import, Star, Star1, Timer, Video, VideoPlay} from "iconsax-react";

export default function Page() {
    return <div className="container grid grid-cols-4 gap-4 py-10">
        <div className="col-span-3">

            <div className="grid grid-cols-3 gap-4">

                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <Timer variant={"Bulk"} className="w-10 h-10"/>
                        </div>
                        <div className="stat-title">تعداد جلسات مشاهده شده</div>
                        <div className="stat-value">23</div>
                        <div className="stat-desc gap-1 flex items-center">
                            <span>تعداد کل جلسات:</span>
                            <span>43</span>
                        </div>
                    </div>
                </div>

                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <Clock variant={"Bulk"} className="w-10 h-10"/>
                        </div>
                        <div className="stat-title">مدت زمان آموزش</div>
                        <div className="stat-value">240 <span className="text-2xl">دقیقه</span></div>
                        <div className="stat-desc gap-1 flex items-center">
                            <span>مجموع زمان آموزش:</span>
                            <span>240 <span >دقیقه</span></span>
                        </div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <Eye variant={"Bulk"} className="w-10 h-10"/>
                        </div>
                        <div className="stat-title">آخرین بازدید</div>
                        <div className="stat-value text-2xl py-auto">جلسه دوم</div>
                        <div className="stat-desc">
                            <a href="#" className="link-primary">برو به جلسه</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-4 space-y-4">
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-1"/>
                    <div className="collapse-title text-lg flex items-center gap-2 font-medium">
                        <span className="font-bold">جلسه اول</span>
                        <span className="text-base">مبانی و مقدمات برنامه نویسی</span>
                    </div>
                    <div className="collapse-content">
                        <div className="border-r-2 border-base-200">
                            <ul className="font-medium space-y-3">
                                {
                                    [1, 2, 3, 4, 5].map(item => <li className={`px-3 flex items-center gap-2 border-r-2 ${item === 1 ? "border-primary" : "border-transparent"} -mr-[2px]`}>

                                        <VideoPlay className="w-5 h-5 text-primary mb-1" />
                                        <span>مشاهده ویدیو</span>
                                        <div className="flex items-center mr-auto join">
                                            <div className="tooltip" data-tip="مشاهده">
                                                <button className="btn btn-sm btn-square join-item">
                                                    <Eye className="w-4 h-4"/>
                                                </button>
                                            </div>
                                            <div className="tooltip" data-tip="افزودن به علاقه مندی">
                                                <button className="btn btn-sm btn-square join-item">
                                                    <Star1 className="w-4 h-4"/>
                                                </button>
                                            </div>
                                            <div className="tooltip" data-tip="دانلود">
                                                <button className="btn btn-sm btn-square join-item">
                                                    <Import className="w-4 h-4"/>
                                                </button>
                                            </div>
                                        </div>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div>
            <div className="card bg-base-100  card-compact ">
                <figure><img src="/assets/images/educations/education_01.webp" alt="sadsfdf"/></figure>
                <div className="card-body">
                    <h3 className="card-title">دوره جامع ری اکت من</h3>
                    <div className="flex gap-2 mt-2 items-center">
                        <div className="avatar">
                            <div className="w-12 mask mask-squircle">
                                <img src="/assets/images/teachers/teacher_01.png" alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-primary font-medium">مهندس</div>
                            <div className="text-base font-medium">مصطفی فلاحی</div>
                        </div>
                    </div>
                    <div className="border-r-2 border-base-200 mt-3">
                        <div
                            className="border-r-2 border-primary -mr-[2px] px-2 font-semibold">مواردی ک خریداری کرده اید
                        </div>
                        <ul className="font-medium mt-2">
                            {
                                [1, 2, 3, 4, 5].map(item => <li className="px-3 flex items-center gap-2">
                                    <div className="form-control w-full">
                                        <label className="cursor-pointer w-full label gap-3">
                                            <input readOnly={true} checked={true} type="checkbox"
                                                   className="checkbox checkbox-primary rounded-md checkbox-sm"/>
                                            <div className="label-text flex items-center justify-between w-full">
                                                <span>جدید ترین</span>
                                            </div>
                                        </label>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="border-r-2 border-base-200 ">
                        <div className="border-r-2 border-primary -mr-[2px] px-2 font-semibold">مواردی ک میتوانید
                            اضافه کنید
                        </div>
                        <ul className="font-medium">
                            {
                                [1, 2, 3, 4, 5].map(item => <li className="px-3 flex items-center gap-2">
                                    <div className="form-control w-full">
                                        <label className="cursor-pointer w-full label gap-3">
                                            <input type="checkbox"
                                                   className="checkbox checkbox-primary rounded-md checkbox-sm"/>
                                            <div className="label-text flex items-center justify-between w-full">
                                                <span>گواهینامه</span>
                                                <div
                                                    className="flex font-semibold items-center gap-1 text-primary">220,000 <Toman
                                                    className="w-4 h-4"/></div>
                                            </div>
                                        </label>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}