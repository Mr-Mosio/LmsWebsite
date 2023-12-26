import Link from "next/link";
import Logo from "@/components/global/logo";
import Button from "@/components/global/button";
import Course from "@/components/education/course";
import Toman from "@/components/icons/toman";
import {Wallet} from "iconsax-react";

export default function Page() {
    return <div className="h-screen bg-base-200 flex items-center ">
        <div className="w-1/2 mx-auto my-auto">
            <Link href="/">
                <Logo className="w-44 mx-auto mb-4"/>
            </Link>

            <div className="grid grid-cols-3 gap-5">
                <div className="card bg-base-100 w-full col-span-2">
                    <div className="card-body">
                        <div className="border-r-2 border-base-200 ">
                            <div className="border-r-2 border-primary -mr-[2px] px-2 font-semibold">مواردی ک خریداری
                                میکنید
                            </div>
                            <ul className="font-medium">
                                {
                                    [1, 2, 3, 4, 5].map(item => <li className="px-3 flex items-center gap-2">
                                        <div className="form-control w-full">
                                            <label className="cursor-pointer w-full label gap-3">
                                                <input readOnly={true} checked={true} type="checkbox"
                                                       className="checkbox checkbox-primary rounded-md checkbox-sm"/>
                                                <div className="label-text flex items-center justify-between w-full">
                                                    <span>جدید ترین</span>
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
                        <div className="border-r-2 border-base-200 ">
                            <div className="border-r-2 border-primary -mr-[2px] px-2 font-semibold">مواردی ک میتوانید اضافه کنید</div>
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
                <div className="space-y-5">
                    <Course/>
                    <div className="card bg-base-100">
                        <div className="card-body flex-row justify-between items-center p-4">
                            <div>
                                <h3 className="text-sm font-semibold text-primary">موجودی کیف پول</h3>
                                <h4 className="text-2xl font-bold flex items-center">250,000 <Toman
                                    className="w-6 h-6"/></h4>
                            </div>
                            <Wallet variant="Bulk" className="w-10 h-10 text-primary"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}