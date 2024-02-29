import './Navigation.css'

export default function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <a className='navigation__link'>Главная</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'>Фильмы</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'>Сохраненный фильмы</a>
                </li>
            </ul>
        </nav>
    )
}