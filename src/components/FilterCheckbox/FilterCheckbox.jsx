import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <label className='filter-checkbox'>
            <span className='filter-checkbox__switch'></span>
            <input 
                className='filter-checkbox__input' 
                type='checkbox'
                name='filter'
            />Короткометражки
            
        </label>
    )
}