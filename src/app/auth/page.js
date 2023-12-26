"use client";
import Logo from "@/components/global/logo";
import Button from "@/components/global/button";
import Link from "next/link";
import {Controller, useFieldArray, useForm, useWatch} from "react-hook-form";
import {useEffect} from "react";

export default function Page() {
    return <div className="h-screen bg-base-200 flex items-center ">
        <div className="max-w-96 mx-auto my-auto">
            <Link href="/">
                <Logo className="w-44 mx-auto mb-4"/>
            </Link>
            {/*<div className="card bg-base-100 w-full">*/}
            {/*    <div className="card-body">*/}
            {/*        <div className="card-title font-semibold justify-center">ورود / ثبت نام</div>*/}
            {/*        <p className="text-center">برای ورود و یا عضویت به سایت ابتدا شماره موبایل خود را وارد کنید. </p>*/}
            {/*        <div className="mt-5">*/}
            {/*            <label className="w-full join">*/}
            {/*                <button className="btn join-item">*/}
            {/*                    <CallCalling className="w-4 h-4"/>*/}
            {/*                </button>*/}
            {/*                <input type="text" placeholder="شماره موبایل خود را وارد کنید"*/}
            {/*                       className="input bg-base-200 join-item grow"/>*/}
            {/*            </label>*/}
            {/*        </div>*/}

            {/*        <Button className="w-full mt-5" variant="primary">ورود / ثبت نام</Button>*/}

            {/*        <div className="mt-4 pt-4 border-t border-base-300 text-center text-sm text-base-content/50">*/}
            {/*            با ثبت نام در راکت شما با قوانین و مقررات استفاده از سرویس‌های سایت موافقت می‌کنید*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div className="card bg-base-100 w-full">
                <div className="card-body">
                    <div className="card-title font-semibold justify-center">ورود / ثبت نام</div>
                    <p className="text-center">کد تایید به شماره <span className="text-primary font-semibold"> 09923444265 </span> ارسال شد</p>

                    <OtpFields className="mt-5" numInputs={5} onChange={(value) => {
                        console.log(value)
                    }} onSubmit={() => {
                        console.log("submit")
                    }} />

                    <Button className="w-full mt-5" variant="primary">برسی کد</Button>

                    <div className="text-center mt-4 text-sm text-base-content/80"><span>02:00</span> مانده تا دریافت مجدد کد </div>

                    <div className="mt-4 pt-4 border-t border-base-300 text-center text-sm text-base-content/50">
                        با ثبت نام در راکت شما با قوانین و مقررات استفاده از سرویس‌های سایت موافقت می‌کنید
                    </div>

                </div>
            </div>
        </div>
    </div>
}

function OtpFields({className, numInputs = 4, onSubmit = () => {}, onChange = () => {}}) {
    "use client";
    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        formState: {errors},
    } = useForm()
    const {
        fields,
        append,
    } = useFieldArray({
        control,
        name: 'otp',
        rules: {
            minLength: numInputs,
            maxLength: numInputs,
        },
    })

    const otpWatch = useWatch({
        control,
        name: "otp"
    })

    useEffect(() => {
        if (otpWatch && otpWatch.join("").length === numInputs) {
            onChange(otpWatch.join(""));
            onSubmit();
        }else if (otpWatch) {
            onChange(otpWatch.join(""));
        }
    }, [otpWatch]);

    useEffect(() => {
        setValue("otp", Array(numInputs).fill(""))
    }, [numInputs]);

    return <div dir="ltr" style={{"--grid-cols": `repeat(${numInputs}, minmax(0, 1fr))`}} className={`grid grid-cols-[var(--grid-cols)] gap-3 ${className}`}>
        {
            fields.map((field, index) => (
                <Controller key={field.id} render={({field: {value, onChange}}) => (
                    <input type="text" value={value} onFocus={(e) => {
                        if (e.target.value) {
                            e.target.select()
                        }
                    }} onKeyUp={(e) => {
                        if (!isNaN(Number(e.target.value)) && e.key === "Backspace" && !e.target.value.length && index) {
                            e.target.previousElementSibling.focus()
                        }
                    }} onInput={(e) => {
                        if (!isNaN(Number(e.target.value)) && e.target.value.length && index+1 !== numInputs) {
                            e.target.nextElementSibling.focus()
                        }
                    }} onChange={(e) => {
                        if (!isNaN(Number(e.target.value))) {
                            onChange(e.target.value)
                        }
                    }} className="input aspect-square w-full bg-base-200 text-center font-semibold" maxLength={1}/>
                )} name={`otp.${index}`} control={control}/>
            ))
        }
    </div>
}