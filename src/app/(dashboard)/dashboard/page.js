import Logo, {SymbolLogo} from "@/components/global/logo";
import {Box1, Cards, DocumentCopy, Home2, Logout, Profile, Wallet, Wallet1} from "iconsax-react";
import NotificationBar from "@/components/main/notificationBar";
import Header from "@/components/main/header";
import Link from "next/link";
import Toman from "@/components/icons/toman";

export default function Page() {

    return <>

        <div className="container grid grid-cols-4 gap-6 py-10">
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                       <Box1 variant={"Bulk"} className="w-10 h-10" />
                    </div>
                    <div className="stat-title">دوره های من</div>
                    <div className="stat-value">23</div>
                    <div className="stat-desc">
                        <Link href="" className="link-primary">مشاهده همه</Link>
                    </div>
                </div>

            </div>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                       <DocumentCopy variant={"Bulk"} className="w-10 h-10" />
                    </div>
                    <div className="stat-title">تراکنش های من</div>
                    <div className="stat-value">23</div>
                    <div className="stat-desc">
                        <Link href="" className="link-primary">مشاهده همه</Link>
                    </div>
                </div>

            </div>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                       <Wallet1 variant={"Bulk"} className="w-10 h-10" />
                    </div>
                    <div className="stat-title">موجودی کیف پول</div>
                    <div className="stat-value flex items-center">20,000 <Toman className="w-9 h-9"/></div>
                    <div className="stat-desc">
                        <Link href="" className="link-primary">افزایش موجودی</Link>
                    </div>
                </div>

            </div>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <SymbolLogo className="w-10 h-10" />
                    </div>
                    <div className="stat-title">حضور در ای تی سان</div>
                    <div className="stat-value">23 <span className="text-2xl">روز</span></div>
                    <div className="stat-desc">
                        <Link href="" className="link-primary">مشاهده همه</Link>
                    </div>
                </div>

            </div>
        </div>

    </>
}