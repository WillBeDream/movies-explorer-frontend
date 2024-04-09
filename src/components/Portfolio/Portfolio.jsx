import './Portfolio.css';
import arrowImg from '../../images/arrow.svg';

export default function Portflio() {
    return (
        <div className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a 
                        className='portfolio__link hover-link'
                        href='https://willbedream.github.io/how-to-learn/'
                        target="_blank"
                    >
                        <p className='portfolio__text'>Статичный сайт</p>
                        <p className='portfolio__img'>&#x2197;</p>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a 
                        className='portfolio__link hover-link' 
                        href='https://willbedream.github.io/russian-travel/'
                        target="_blank"
                        rel='noreferrer'
                    >
                        <p className='portfolio__text'>Адаптивный сайт</p>
                        <p className='portfolio__img'>&#x2197;</p>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a
                        className='portfolio__link hover-link'
                        href='http://normal.nomoredomainsmonster.ru/'
                        target="_blank"
                    > 
                        <p className='portfolio__text'>Одностраничное приложение</p>
                        <p className='portfolio__img'>&#x2197;</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}