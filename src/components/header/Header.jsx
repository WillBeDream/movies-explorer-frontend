import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo"></div>
                <div className="header__menu">
                    <a className="header__link header__link_link">Регистрация</a>
                    <a className="header__link header__link_button">Войти</a>
                </div>
            </div>
        </header>
    )
}