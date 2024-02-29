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
                <button className='promo__button' type='button'>Узнать больше</button>
            </div>
            <img className='promo__image' src={promoImg} alt='web-world'></img>
        </section>
    )
}