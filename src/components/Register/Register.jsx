import './Register.css'
import AuthWindow from '../AuthWindow/AuthWindow'


export default function Register() {
    return (
        <main className='register'>
            <AuthWindow>
                <section className='form__wrapper'>
                    <form className='form' name='register'>
                        <label className='form__label'>Имя
                            <input 
                                className='form__input'
                            >
                            </input>
                        </label>
                        <span className='form__input_error'></span>
                        <label className='form__label'>E-mail
                            <input 
                                className='form__input'
                            >
                            </input>
                            
                        </label>
                        <span className='form__input_error'></span>
                        <label className='form__label'>Пароль
                            <input 
                                className='form__input'
                            >
                            </input>
                        </label>
                        <span className='form__input_error'>fsfsfsf</span>
                        <button 
                            className='form__button form__button_register'
                            type='submit'
                            form='register'
                        >Зарегистрироваться</button>

                    </form>
                </section>
            </AuthWindow>
            
        </main>
    )
}