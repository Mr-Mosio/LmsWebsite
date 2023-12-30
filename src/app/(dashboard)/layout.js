import NotificationBar from "@/components/main/notificationBar";
import Header from "@/components/main/header";
import {Box1, DocumentCopy, Home2, Profile} from "iconsax-react";

export default function Layout({children}) {
    return <div className="bg-base-200 min-h-screen">
        <NotificationBar/>
        <Header/>
        <div className="sticky bg-gradient-to-r from-primary to-primary-focus top-16 z-50">
            <div className="container">
                <div className="navbar">
                    <ul className="menu lg:menu-horizontal text-primary-content">
                        <li>
                            <a>
                                <Home2 className="w-5 h-5 mb-1"/>
                                <span>داشبورد</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <Box1 className="w-5 h-5 mb-1"/>
                                <span>دوره های من</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <DocumentCopy className="w-5 h-5 mb-1"/>
                                <span>تراکنش های من</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <Profile className="w-5 h-5 mb-1"/>
                                <span>حساب کاربری</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        {children}
    </div>
}