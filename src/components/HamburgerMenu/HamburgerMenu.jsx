import './HamburgerMenu.css'
import Navigation from '../Navigation/Navigation'
import AccountLink from '../AccountLink/AccountLink'

export default function HamburgerMenu({isSideMenuOpen, onClose}) {
    return (
        <div className={`overlay ${isSideMenuOpen ? 'overlay_active':''}`}>
            <div className={`hamburger-menu ${isSideMenuOpen ? 'hamburger-menu_active': ''}`}>
                <button 
                    className='hamburger-menu__button-close'
                    type='button'
                    onClick={onClose}
                ></button>
                <p className='hamburger-menu__title'>Главная</p>
                <Navigation isSideMenu={true} onClose={onClose}></Navigation>
                <AccountLink isSideMenu={true} onClose={onClose}></AccountLink>
            </div>
        </div>
    )
}