import './AboutMe.css';
import myPhoto from '../../images/my-photo.svg';
import Portflio from '../Portfolio/Portfolio';

export default function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-title">Студент</h2>
            <div className='about-me__wrapper'>
                <h2 className='about-me__title'>Виталий</h2>
                <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
                <p className='about-me__text'>
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
                    Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». 
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <a 
                    className='about-me__github hover-link'
                    href="https://github.com/WillBeDream"
                    target="_blank"
                >Github</a>
                <img className='about-me__photo' src={myPhoto} alt='мое фото'></img>
            </div>
            <Portflio></Portflio>
            
        </section>
    )
}