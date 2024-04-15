// IMPORT STYLES
import "./AboutMe.css";

// IMPORT IMAGES
import author from "../../images/me.png";

// IMPORT COMPONENTS
import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from "../Portfolio/Portfolio";

// ABOUT ME COMPONENT
function AboutMe() {

  return (
    <section className="about-me">
      <SectionTitle title="Студент" />
      <article className="about-me__bio">
        <h3 className="about-me__name">Виталий</h3>
        <p className="about-me__profession">Фронтенд-разработчик 30 лет</p>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          className="about-me__link hover-link"
          href="https://github.com/WillBeDream"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img
          className="about-me__img"
          src={author}
          alt="Фотография разработчика"
        />
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
