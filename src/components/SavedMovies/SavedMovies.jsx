import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import AppLayout from '../AppLayout/AppLayout'

export default function SavedMovies() {
    return (
        <main className='movies'>
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
        </main>
    )
}

