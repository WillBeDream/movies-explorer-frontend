import './Portfolio.css';
import arrowImg from '../../images/arrow.svg';

export default function Portflio() {
    return (
        <div className='portfolio'>
            <h1 className='portfolio__title'>Портфолио</h1>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a className='portfolio__link'> 
                        <p className='portfolio__text'>Статичный сайт</p>
                        <img className='portfolio__img' src={arrowImg}></img>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link'> 
                        <p className='portfolio__text'>Адаптивный сайт</p>
                        <img className='portfolio__img' src={arrowImg}></img>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link'> 
                        <p className='portfolio__text'>Одностраничное приложение</p>
                        <img className='portfolio__img' src={arrowImg}></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}