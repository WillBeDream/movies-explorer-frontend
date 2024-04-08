import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
    return (
        <main className='not-found'> 
            <section className='not-found__wrapper'>
                <h1 className='not-found__title'>404</h1>
                <p className='not-found__text'>Страница не найдена</p>
                <Link to={'/'} className='not-found__link hover-link'>Назад</Link>
            </section>
        </main>
    )
}