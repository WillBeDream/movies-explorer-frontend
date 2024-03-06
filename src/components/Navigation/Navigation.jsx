import { Link, useLocation } from "react-router-dom";
import './Navigation.css'

export default function Navigation() {
    return (
        // <nav className='navigation'>
        //     <ul className='navigation__list'>
        //         <li className='navigation__item'>
        //             <a className='navigation__link'>Главная</a>
        //         </li>
        //         <li className='navigation__item'>
        //             <a className='navigation__link'>Фильмы</a>
        //         </li>
        //         <li className='navigation__item'>
        //             <a className='navigation__link'>Сохраненный фильмы</a>
        //         </li>
        //     </ul>
        // </nav>
        <nav className='navigation navigation_hidden'>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <Link to='/movies' className="navigation__link">Фильмы</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/movies' className="navigation__link">Сохраненные фильмы</Link>
                </li>
            </ul>

        </nav>
    )
}