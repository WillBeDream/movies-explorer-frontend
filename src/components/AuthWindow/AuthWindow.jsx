import './AuthWindow.css'
import Logotip from '../Logotip/Logotip'
import AuthTitle from '../AuthTitle/AuthTitle'
import { Link } from "react-router-dom";

export default function AuthWindow({...props}) {
    return (
        <section className='auth-window'>
            <Logotip></Logotip>
            <AuthTitle></AuthTitle>
            {props.children}
            <p className='auth-window__text'>
                Уже зарегистрированы?
                <Link to= {'/signin'} className='auth-window__link'>Войти</Link>
            </p>
        </section>
    )
}