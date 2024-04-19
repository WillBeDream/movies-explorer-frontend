import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__brief">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__lists">
          <li className="portfolio__list">
            <Link to={"https://willbedream.github.io/how-to-learn/"} className="portfolio__link" target="_blank" rel="noreferrer">
              <p className="portfolio__site">Статичный сайт</p>
              <div className="portfolio__button"/></Link>
          </li> 
          <li className="portfolio__list">
          <Link to={"https://willbedream.github.io/russian-travel/"} className="portfolio__link" target="_blank" rel="noreferrer">
              <p className="portfolio__site">Адаптивный сайт</p>
              <div className="portfolio__button"/></Link>
          </li> 
          <li className="portfolio__list">
          <Link to={"http://normal.nomoredomainsmonster.ru/"} className="portfolio__link portfolio__link_end"  target="_blank" rel="noreferrer">
              <p className="portfolio__site">Одностраничное приложение</p>
              <div className="portfolio__button"/></Link>
          </li> 
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;
