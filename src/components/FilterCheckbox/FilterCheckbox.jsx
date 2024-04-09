import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <label className='filter-checkbox'>
            <span className='filter-checkbox__switch'></span>
            <input 
                className='filter-checkbox__toggle' 
                type='checkbox'
                name='toggle'
                
            />Короткометражки
        </label>
    )
}