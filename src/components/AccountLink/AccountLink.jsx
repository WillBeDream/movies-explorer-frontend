import './AccountLink.css'
import { Link } from "react-router-dom";
import accountLink from '../../images/profile-icon.svg'

export default function AccountLink() {
    return (
        <Link className='account-link' >
            <p className='account-link__text'>Аккаунт</p>
            <img className='account-link__image' src={accountLink} />
        </Link>
    )
}