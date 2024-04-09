import './AccountLink.css'
import { Link } from "react-router-dom";
import accountLink from '../../images/profile-icon.svg'

export default function AccountLink({isSideMenu}) {
    return (
        <Link to={'/profile'} className={`account-link ${isSideMenu ? 'account-link_active' : 'account-link_hidden'}`} >
            <p className='account-link__text hover-link'>Аккаунт</p>
            <img className='account-link__image' alt='иконка' src={accountLink} />
        </Link>
    )
}