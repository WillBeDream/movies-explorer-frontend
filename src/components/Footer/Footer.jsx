import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__text'> 
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className='footer__wrapper'>
                <div className='footer__year'>© 2023</div>
                <ul className='footer__list'>
                    <li className='footer__list-item'>
                        <a className='footer__link hover-link'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__link hover-link'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}