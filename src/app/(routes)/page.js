
import NotificationBar from "@/components/main/notificationBar";
import Header from "@/components/main/header";
import Button from "@/components/global/button";
import {ArrowLeft, Book, Book1, Box, Box1, Facebook, Instagram, Teacher, Whatsapp} from "iconsax-react";
import Card from "@/components/global/card";
import Toman from "@/components/icons/toman";
import Logo, {DarkLogo, LightLogo} from "@/components/global/logo";
import Link from "next/link";
import Course from "@/components/education/course";

export default function Home() {
  return (
      <>
          <section className="container grid grid-cols-2 gap-6 py-5 items-center">
              <div className="space-y-10">
                  <h1 className="text-5xl font-black">وبسایت آموزشی مدرسان شریف</h1>
                  <h2 className="text-2xl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن
                      ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src="/assets/images/banners/main-banner.png" alt=""/>
              </div>
          </section>

          <section className="py-16">
              <div className="container">
                  <div className="flex items-end justify-between">
                      <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-primary">اساتید ما</h3>
                          <h4 className="text-3xl font-bold">اساتید برتر کشوری برنامه نویسی</h4>
                      </div>
                      <a href="#" className="text-primary flex items-center group transition-all duration-300">
                          <span>مشاهده همه</span>
                          <ArrowLeft
                              className="w-5 h-5 transition-all duration-300 translate-x-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-x-1.5"/>
                      </a>
                  </div>
                  <div className="mt-5 grid grid-cols-5 divide-x divide-x-reverse divide-dashed divide-base-300">
                      {[1, 2, 3, 4, 5].map(item => <div className="px-3">
                          <div
                              className="w-full flex flex-col rounded-box items-center group transition-all duration-300 hover:bg-base-200 hover:-translate-y-3 py-8 px-5">
                              <div className="relative z-10">
                                  <div className="avatar absolute -z-10  rotate-45">
                                      <div className="w-32 mask mask-squircle">
                                          <div className="bg-primary h-full w-full"></div>
                                      </div>
                                  </div>
                                  <div className="avatar shadow-lg mask mask-squircle">
                                      <div className="w-32 mask mask-squircle">
                                          <img className="" src={`/assets/images/teachers/teacher_0${item}.png`}
                                               alt=""/>
                                      </div>
                                  </div>
                              </div>
                              <span className="mt-4 block">مهندس</span>
                              <span className="font-semibold text-lg">مصطفی فلاحی</span>
                              <div
                                  className="text-primary mt-2 transition-all flex items-center gap-2 duration-300 px-8 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                                  <ArrowLeft className="w-4 h-4"/>
                                  <span>مشاهده پروفایل</span>
                              </div>
                          </div>
                      </div>)}
                  </div>
              </div>
          </section>

          <section className="py-10 bg-base-200/50">
              <div className="container grid grid-cols-3 gap-5">
                  {[1, 2, 3].map(item => <div className="border-r border-dashed border-base-300">
                      <div className="pr-5">
                          <Teacher variant="Bulk" className="w-12 h-12 text-primary-focus"/>
                      </div>
                      <h4 className="border-r-2 border-primary mt-3 -mr-px text-xl font-semibold px-5">برترین
                          اساتید</h4>
                      <p className="px-5 mt-2">قیمت‌های اقتصادی و رقابتی ابر آروان به شما این امکان را می‌دهد تا با هر
                          بودجه‌ای مناسب‌ترین سرویس را تهیه کنید.</p>
                  </div>)}
              </div>
          </section>


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


          <section className="w-full">
              <img src="/assets/images/banners/home_banner_01.png" className="w-full" alt=""/>
          </section>

          {/* PACKAGES */}
          {/*<section className="py-16">*/}
          {/*    <div className="container">*/}
          {/*        <div className="flex items-end justify-between">*/}
          {/*            <div className="space-y-3">*/}
          {/*                <h3 className="text-lg font-semibold text-primary">پکیج ها</h3>*/}
          {/*                <h4 className="text-3xl font-bold">پکیج های کامل و جامع برنامه نویسی</h4>*/}
          {/*            </div>*/}
          {/*            <div className="flex flex-col items-end gap-3">*/}
          {/*                <a href="#" className="text-primary flex items-center group transition-all duration-300">*/}
          {/*                    <span>مشاهده همه</span>*/}
          {/*                    <ArrowLeft*/}
          {/*                        className="w-5 h-5 transition-all duration-300 translate-x-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-x-1.5"/>*/}
          {/*                </a>*/}
          {/*                <div className="tabs tabs-boxed tabs-categories rounded-full">*/}
          {/*                    <div className="rounded-full tab tab-active">فرانت اند</div>*/}
          {/*                    <div className="rounded-full tab">بک اند</div>*/}
          {/*                    <div className="rounded-full tab">پروژه محور</div>*/}
          {/*                </div>*/}

          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <div className="mt-5 grid grid-cols-2 divide-x divide-x-reverse divide-dashed divide-base-300">*/}
          {/*            {[1, 2].map(item => <div className="px-3">*/}
          {/*                <div className="card bg-base-100 overflow-hidden">*/}
          {/*                    <div className="card-body p-0 grid grid-cols-3 overflow-hidden">*/}
          {/*                        <div className="bg-cover bg-center bg-no-repeat" style={*/}
          {/*                            {*/}
          {/*                                backgroundImage: `url('/assets/images/educations/education_01.webp')`*/}
          {/*                            }*/}
          {/*                        }></div>*/}
          {/*                        <div className="col-span-2 ps-3">*/}
          {/*                            <h2 className="card-title">پکیج های کامل و جامع برنامه نویسی</h2>*/}
          {/*                            <p>دوره آموزش مفاهیک جامع React بصورت پروژه محور بهترین دوره در زمینه آموزش فرانت*/}
          {/*                                اند در*/}
          {/*                                خاورمیانه</p>*/}

          {/*                            <div className=" mt-3 -space-x-6 rtl:space-x-reverse">*/}

          {/*                                <div className="avatar">*/}
          {/*                                    <div*/}
          {/*                                        className="h-14 rounded-lg overflow-hidden !aspect-auto border-4 border-base-100">*/}
          {/*                                        <img className=" h-full"*/}
          {/*                                             src="/assets/images/educations/education_01.webp"/>*/}
          {/*                                    </div>*/}
          {/*                                </div>*/}
          {/*                                <div className="avatar">*/}
          {/*                                    <div*/}
          {/*                                        className="h-14 rounded-lg overflow-hidden !aspect-auto border-4 border-base-100">*/}
          {/*                                        <img className=" h-full"*/}
          {/*                                             src="/assets/images/educations/education_01.webp"/>*/}
          {/*                                    </div>*/}
          {/*                                </div>*/}
          {/*                            </div>*/}
          {/*                        </div>*/}
          {/*                    </div>*/}
          {/*                    <div className="card-body flex-row px-5 py-2 flex items-center justify-between">*/}
          {/*                        <div className="flex items-center gap-1 font-medium text-base">*/}
          {/*                            <span>200,000</span>*/}
          {/*                            <Toman className="w-4 h-4"/>*/}
          {/*                        </div>*/}
          {/*                        <div className="flex items-center gap-1 text-primary cursor-pointer">*/}
          {/*                            <span>مشاهده پکیج</span>*/}
          {/*                            <ArrowLeft className="w-4 h-4"/>*/}
          {/*                        </div>*/}

          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>)}*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</section>*/}


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
                      {[1, 2, 3, 4].map(item =><Course className="px-3" />)}
                  </div>
              </div>
          </section>


          {/*<section className="py-16">*/}
          {/*    <div className="container grid grid-cols-2 gap-4">*/}
          {/*        <div></div>*/}
          {/*        <div className="mockup-phone">*/}
          {/*            <div className="camera"></div>*/}
          {/*            <div className="display">*/}
          {/*                <div className="artboard artboard-demo phone-1">*/}

          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</section>*/}



          
      </>
  )
}
