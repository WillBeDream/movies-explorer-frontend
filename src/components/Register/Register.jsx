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
                                minLength="2"
                                maxLength="30"
                                required
                                placeholder='Введите имя'
                            >
                            </input>
                        </label>
                        <span className='form__input-error'></span>
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
                            className='form__button form__button_register hover-button'
                            type='submit'
                            
                        >Зарегистрироваться</button>

                    </form>
                </section>
            </AuthWindow>
            
        </main>
    )
}