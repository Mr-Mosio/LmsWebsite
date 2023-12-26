import Card from "@/components/global/card";
import Toman from "@/components/icons/toman";
import {ArrowLeft} from "iconsax-react";

export default function Course({className}) {
    return <div className={className}>
        <Card className="transition-all bg-base-100 duration-300 hover:shadow-xl" title={"دوره آموزشی React"}
              thumbnail={"/assets/images/educations/education_01.webp"}
              actions={<div
                  className="flex w-full items-center justify-between border-t border-base-200 mt-1 pt-3">
                  <div>
                      <div className="flex items-center gap-1 font-medium text-base">
                          <span>200,000</span>
                          <Toman className="w-4 h-4"/>
                      </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary cursor-pointer">
                      <span>مشاهده دوره</span>
                      <ArrowLeft className="w-4 h-4"/>
                  </div>
              </div>}>
            <p>دوره آموزش مفاهیک جامع React بصورت پروژه محور بهترین دوره در زمینه آموزش فرانت اند در
                خاورمیانه</p>
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
        </Card>
    </div>
}