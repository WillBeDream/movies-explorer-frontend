import './Profile.css'
import AuthTitle from '../AuthTitle/AuthTitle'

export default function Profile() {
    return (
        <main className='profile'>
            <section className='profile__wrapper'>
                <AuthTitle className='profile__title'></AuthTitle>
                <form className='form form_edit_profile' name='edit-profile'>
                    <label className='form__label'>Имя
                        <input 
                            className='form__input'
                        >
                        </input>
                    </label>
                    <label className='form__label form__label_edit-profile'>E-mail
                        <input 
                            className='form__input'
                        >
                        </input>
                    </label>
                </form>
                <div className='profile__wrapper-actions'>
                    <button
                        className='profile__button'
                        type='button'
                    >Редактировать
                    </button>
                    <button
                        className='profile__button profile__button_exit'
                        type='button'
                    >Выйти из аккаунта
                    </button>
                </div>
            </section>

        </main>
    )
}