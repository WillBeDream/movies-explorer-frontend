import './Login.css'
import AuthWindow from '../AuthWindow/AuthWindow'

export default function Login() {
    return (
        <main className='login'>
            <AuthWindow>
                <section className='form__wrapper'>
                    <form className='form' name='login'>
                        <label className='form__label'>E-mail
                            <input 
                                className='form__input'
                                placeholder='Введите почту'
                                required
                            >
                            </input>
                            
                        </label>
                        <span className='form__input-error'></span>
                        <label className='form__label'>Пароль
                            <input 
                                className='form__input'
                                minLength="2"
                                maxLength="30"
                                placeholder='Введите пароль'
                                required
                            >
                            </input>
                        </label>
                        <span className='form__input-error'>fsfsfsf</span>
                        <button 
                            className='form__button form__button_login hover-button'
                            type='submit'
                        >Войти</button>

                    </form>
                </section>
            </AuthWindow>
        </main>
    )
}