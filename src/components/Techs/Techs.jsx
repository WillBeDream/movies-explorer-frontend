import './Techs.css';

export default function Techs() {
    return (
        <section className='techs'>
            <h1 className='section-title'>Технологии</h1>
            <h2 className='techs__title'>7 технологий</h2>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
                <li className='techs__item'>HTML</li>
                <li className='techs__item'>CSS</li>
                <li className='techs__item'>JS</li>
                <li className='techs__item'>React</li>
                <li className='techs__item'>Git</li>
                <li className='techs__item'>Express.js</li>
                <li className='techs__item'>mongoDB</li>
            </ul>
        </section>
    )
}