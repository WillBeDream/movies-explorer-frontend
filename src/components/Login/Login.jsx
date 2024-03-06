import './Login.css'
import AuthWindow from '../AuthWindow/AuthWindow'

export default function Login() {
    return (
        <main className='login'>
            <AuthWindow>
                <section className='form__wrapper'>
                    <form className='form' name='login'>
                        
                        <span className='form__input_error'></span>
                        <label className='form__label'>E-mail
                            <input 
                                className='form__input'
                                required
                            >
                            </input>
                            
                        </label>
                        <span className='form__input_error'></span>
                        <label className='form__label'>Пароль
                            <input 
                                className='form__input'
                                minLength="2"
                                maxLength="30"
                                required
                            >
                            </input>
                        </label>
                        <span className='form__input_error'>fsfsfsf</span>
                        <button 
                            className='form__button form__button_register'
                            type='submit'
                            form='register'
                        >Войти</button>

                    </form>
                </section>
            </AuthWindow>
        </main>
    )
}