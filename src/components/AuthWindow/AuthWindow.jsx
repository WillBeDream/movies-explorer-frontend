import './AuthWindow.css'
import Logotip from '../Logotip/Logotip'
import AuthTitle from '../AuthTitle/AuthTitle'

export default function AuthWindow({...props}) {
    return (
        <section className='auth-window'>
            <Logotip></Logotip>
            <AuthTitle></AuthTitle>
            {props.children}
            <p className='auth-window__text'>
                Уже зарегистрированы?
                <a className='auth-window__link'>Войти</a>
            </p>
        </section>
    )
}