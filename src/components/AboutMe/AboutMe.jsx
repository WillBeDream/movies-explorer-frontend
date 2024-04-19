import './AboutMe.css';
import foto from '../../images/about-mefoto.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__brief">Студент</h2>
      <div className="about-me__conteiners">
        <div className="about-me__conteiner">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__history">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании СКБ Контур . После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className="about-me__github" href="https://github.com/WillBeDream" target="_blank" rel="noreferrer">Github</a>
      </div>
      <img src={foto} alt="аватар" className="about-me__foto"/>
      </div>
    </section>
  )
}

export default AboutMe;
