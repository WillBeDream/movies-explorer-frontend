import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation, Link } from "react-router-dom";

export default function MoviesCardList() {
    const location = useLocation();
    return (
        <section className='movies-card-list'>
            {location.pathname === '/saved-movies' ? (
                <>
                <ul className='movies-card-list__list'>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                </ul>
                <button 
                    className='movies-card-list__button hover-button'
                    type='button'
                >
                    Ещё
                </button>
                </>
            ) : (
                <>
                <ul className='movies-card-list__list'>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                </ul>
                <button 
                    className='movies-card-list__button hover-button'
                    type='button'
                >
                    Ещё
                </button>
                </>
            )}
        </section>
    )
}