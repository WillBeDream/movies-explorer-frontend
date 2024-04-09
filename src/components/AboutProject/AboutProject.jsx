import './AboutProject.css';

export default function AboutProject() {
    return (
        <section className="about-project" id='about'>
            <h2 className="section-title">О проекте</h2>
            <div className='about-project__wrapper'>
                <div className='about-project-column'>
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='about-project-column'>
                    <h2 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h2>
                    <p className='about-project__text'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='about-project__wrapper-timeline'>
                    <div className='about-project__wrapper-stage about-project__wrapper-stage_first'>
                        <p className='about-project__week about-project__week_type_special'>1 неделя</p>
                        <p className='about-project__tech'>Back-end</p>
                    </div>
                    <div className='about-project__wrapper-stage about-project__wrapper-stage_second'>
                        <p className='about-project__week'>4 недели</p>
                        <p className='about-project__tech'>Front-end</p>
                    </div>
                </div>
        </section>
    )
}