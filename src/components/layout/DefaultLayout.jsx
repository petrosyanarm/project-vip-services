import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <div className="min-h-screen font-inter">
            <div className="">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout;