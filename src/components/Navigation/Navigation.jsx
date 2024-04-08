import { Link, useLocation } from "react-router-dom";
import './Navigation.css'

export default function Navigation({isSideMenu, onClose}) {
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
        <nav className={`navigation ${isSideMenu? 'navigation_active': 'navigation_hidden'}`}>
            <ul className={`navigation__list ${isSideMenu ? 'navigation__list_direction_column' : ''}`}>
                <li className='navigation__item'>
                    <Link to='/movies' 
                    className={`navigation__link
                     ${isSideMenu ? 'navigation__link_place_side_menu' :''} 
                     hover-link`}>
                        Фильмы
                    </Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/saved-movies' 
                    className={`navigation__link 
                    ${isSideMenu ? 'navigation__link_place_side_menu' : ''} 
                    hover-link`}>
                        Сохраненные фильмы
                    </Link>
                </li>
            </ul>

        </nav>
    )
}