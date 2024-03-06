import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__form'>
                <input 
                    className='search-form__input' 
                    placeholder='Фильм'

                >

                </input>
                <button 
                    className='search-form__button' 
                    type='submit'
                >
                    Найти
                </button>
                <FilterCheckbox></FilterCheckbox>
            </form>
        </section>
    )
}