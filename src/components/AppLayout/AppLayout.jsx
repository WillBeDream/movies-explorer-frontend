import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function AppLayout({onHamburgerClick}) {

    const location = useLocation();

    return (
        <>
            <Header onHamburgerClick={onHamburgerClick}></Header>
            <Outlet></Outlet>
            {location.pathname !== '/profile' && <Footer/>}
            <HamburgerMenu></HamburgerMenu>
        </>
    )
}