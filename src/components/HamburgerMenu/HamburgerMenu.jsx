import './HamburgerMenu.css'
import Navigation from '../Navigation/Navigation'
import AccountLink from '../AccountLink/AccountLink'

export default function HamburgerMenu() {
    return (
        <div className='hamburger-menu'>
            <button 
                className='hamburger-menu__button-close'
                type='button'
            ></button>
            <Navigation></Navigation>
            <AccountLink></AccountLink>
        </div>
    )
}