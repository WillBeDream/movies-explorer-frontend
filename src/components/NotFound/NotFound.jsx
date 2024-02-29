import './NotFound.css'

export default function NotFound() {
    return (
        <main className='not-found'> 
            <section className='not-found__wrapper'>
                <h1 className='not-found__title'>404</h1>
                <p className='not-found__text'>Страница не найдена</p>
                <p className='not-found__link'>Назад</p>
            </section>
        </main>
    )
}