import {useLocation} from 'react-router-dom'
import './AuthTitle.css';

export default function AuthTitle() {
    const location = useLocation()
    return (
        
        <h1 className='auth-title auth-title_type_reg-login'>
            Привет, Виталий!
        </h1>
    )
}