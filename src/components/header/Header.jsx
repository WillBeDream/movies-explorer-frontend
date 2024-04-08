import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import AccountLink from "../AccountLink/AccountLink";
import Logotip from "../Logotip/Logotip";

export default function Header({onHamburgerClick}) {

    const location = useLocation();

    return (
        <header className="header">
            {location.pathname === "/" ? (
                <div className={`header__wrapper ${location.pathname === '/' ? 'header__wrapper_main-color' : ''}`}>
                    <Logotip></Logotip>
                    <div className="header__menu">
                        <Link to={'/signup'} className="header__link header__link_link hover-button">Регистрация</Link>
                        <Link to={'/signin'} className="header__link header__link_button hover-button">Войти</Link>
                    </div>
                </div>
            ) : (
                <div className="header__wrapper">
                    <Logotip></Logotip>
                    <Navigation></Navigation>
                    <AccountLink></AccountLink>
                    <button 
                        className="header__btn-hamburger hover-button"
                        onClick={onHamburgerClick}
                        type="button"
                    >
                    </button>
                </div>
            )}
            
        </header>
    )
}