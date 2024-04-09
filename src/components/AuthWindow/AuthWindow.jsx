import './AuthWindow.css'
import Logotip from '../Logotip/Logotip'
import AuthTitle from '../AuthTitle/AuthTitle'
import { Link, useLocation } from "react-router-dom";

export default function AuthWindow({...props}) {
    const location = useLocation();
    return (
        <section className='auth-window'>
            <Logotip></Logotip>
            <AuthTitle></AuthTitle>
            {props.children}
            {location.pathname === '/signup' ? (
                <p className='auth-window__text'>
                        Уже зарегистрированы?
                    <Link to= {'/signin'} className='auth-window__link hover-link'>Войти</Link>
                </p>
            ) : (
                <p className='auth-window__text'>
                        Еще не зарегестрированы?
                    <Link to= {'/signup'} className='auth-window__link hover-link'>Регистрация</Link>
                </p>
            )} 
            
        </section>
    )
}