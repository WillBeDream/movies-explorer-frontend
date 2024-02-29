import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

export default function Movies() {
    return (
        <main className='movies'>
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
        </main>
    )
}