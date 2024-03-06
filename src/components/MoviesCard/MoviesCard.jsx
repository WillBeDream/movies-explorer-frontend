import './MoviesCard.css'
import filmPath from '../../images/film-image.svg'

export default function MoviesCard() {
    return (
        <div className='movies-card'>
            <img 
                className='movies-card__image' 
                src={filmPath}
                alt='постер фильма'
            ></img>
            <div className='movies-card__wrapper'>
                <p className='movies-card__text'>33 слова о дизайне</p>
                <button className='movies-card__button' type='button'>
                    <svg className='movies-card__like'></svg>
                </button>
            </div>
            <p className='movies-card__duration'>1ч 42</p>
        </div>
    )
}