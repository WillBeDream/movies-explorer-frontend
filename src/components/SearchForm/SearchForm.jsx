import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__form' id="search-and-filter" name="search-and-filter">
                <input 
                    className='search-form__input' 
                    placeholder='Фильм'
                    name="search"
                    type="search"
                    action="#"
                    noValidate
                >

                </input>
                <button 
                    className='search-form__button'
                    type="submit"
                    form="search-and-filter"
                >
                    Найти
                </button>
                <FilterCheckbox></FilterCheckbox>
            </form>
        </section>
    )
}