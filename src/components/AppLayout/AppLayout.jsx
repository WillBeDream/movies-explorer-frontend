import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

export default function AppLayout({}) {

    const location = useLocation();

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            {location.pathname !== '/profile' && <Footer/>}
        </>
    )
}