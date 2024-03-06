import './Promo.css';
import promoImg from '../../images/promo-img.svg';

export default function Promo() {
    return (
        <section className='promo'>
            <div className='promo__wrapper'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <p className='promo__text'>
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
                <button className='promo__button hover-button' type='button'>
                    <a className='promo__link' href='#about' >Узнать больше</a>
                </button>
            </div>
            <img className='promo__image' src={promoImg} alt='земной шар'></img>
        </section>
    )
}