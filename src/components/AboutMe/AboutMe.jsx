import './AboutMe.css';
import myPhoto from '../../images/my-photo.svg';
import Portflio from '../Portfolio/Portfolio';

export default function AboutMe() {
    return (
        <section className="about-me">
            <h1 className="section-title">Студент</h1>
            <div className='about-me__wrapper'>
                <h1 className='about-me__title'>Виталий</h1>
                <h2 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h2>
                <p className='about-me__text'>
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
                    Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». 
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <p className='about-me__github'>Github</p>
                <img className='about-me__photo' src={myPhoto} alt='my photo'></img>
            </div>
            <Portflio></Portflio>
            
        </section>
    )
}