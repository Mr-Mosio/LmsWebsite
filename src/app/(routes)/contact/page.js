import {CallCalling, Headphone} from "iconsax-react";

export default function Page() {
    return <>
        <div
            className="space-y-3 col-span-4 text-center bg-gradient-to-r from-accent to-accent-focus text-accent-content py-20">
            <h3 className="text-lg font-semibold text-primary">تماس با ما</h3>
            <h4 className="text-3xl font-bold">ارتباط پیوسته با ما، در هر ساعت از شبانه‌روز</h4>
        </div>

        <section className="container py-20 grid grid-cols-3 gap-6">
            <div>
                <div>
                    <CallCalling  className={"text-primary w-20 h-20"} variant="Bold"/>
                </div>
            </div>
            <div className="card bg-base-100 shadow">
                <div className="card-body"></div>
            </div>
        </section>


    </>
}