import './Input.css';
         
function Input({ nameinput, name, placeholder, type, title, value, error, id, isInputValid, pattern, minLength, maxLength, onChange, disabled }) {
  
  return (
   <>
      {nameinput === 'profile' ?
        <>
         <label className="input input_profile">
            <span className="form__input-span">{title}</span>
            <input
             type={type}
             id={id}
             pattern={pattern}
             placeholder={placeholder}
             className={`form__item form__item_profile form__item_type_loginRegistrationForm form__item_type_${name} 
              ${isInputValid === undefined || isInputValid ? '' : 'form__item_type_error'}`}
             name={name}
             required
             onChange={onChange}
              disabled={disabled}
             minLength={minLength || ''}
             maxLength={maxLength || ''}
             value={value ? value : ''} />
         </label>
       </>
    :
      <label className="input">
        <span className="form__input-span form__input-span_film">{title}</span>
        <input
          type={type}
          id={id}
          pattern={pattern}
          placeholder={placeholder}
          className={`form__item form__item_type_loginRegistrationForm form__item_type_${name} 
            ${isInputValid === undefined || isInputValid ? '' : 'form__item_type_error'}`}
          name={name}
          required
         
          value={value ? value : ''} 
          onChange={onChange}
          minLength={minLength || ''}
          maxLength={maxLength || ''}
        />
        <span className={`form__input-error ${name === 'username' ? 'name-input-error' : ''}`} >{error}</span>
      </label>
    }
    </>
  )   
}

export default Input;
