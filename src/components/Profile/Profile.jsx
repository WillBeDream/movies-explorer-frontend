import { Link } from 'react-router-dom';
import './Profile.css';
import AuthTitle from '../AuthTitle/AuthTitle';

export default function Profile() {
    return (
        <main className='profile'>
            <section className='profile__wrapper'>
                <AuthTitle className='profile__title'></AuthTitle>
                <form className='form form_edit_profile' name='edit-profile'>
                    <label className='form__label form__label_edit-profile'>Имя
                        <input 
                            className='form__input form__input_edit-profile'
                        >
                        </input>
                    </label>
                    <label className='form__label form__label_edit-profile'>E-mail
                        <input 
                            className='form__input form__input_edit-profile'
                        >
                        </input>
                    </label>
                </form>
                <div className='profile__wrapper-actions'>
                    <button
                        className='profile__button hover-link'
                        type='button'
                    >Редактировать
                    </button>
                    <button
                        className='profile__button profile__button_exit hover-link'
                        type='button'
                    >
                        <Link to={'/signin'} className='profile__exit-link'>Выйти из аккаунта</Link>
                    </button>
                </div>
            </section>

        </main>
    )
}