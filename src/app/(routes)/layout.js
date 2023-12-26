import NotificationBar from "@/components/main/notificationBar";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

export default function Layout({ children }) {
    return <>
        <NotificationBar/>
        <Header/>
        {children}
        <Footer />
    </>
}