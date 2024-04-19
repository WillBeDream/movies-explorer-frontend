import './Checkbox.css'

function Checkbox({ isChecked, setIsChecked, searchForMoviescheckbox}) {
    
  return (
    <>
      <div className="checkbox">
        <label className="checkbox__switch">
          <input type="checkbox" checked={isChecked} onChange={searchForMoviescheckbox} />
          <span className="checkbox__sl round"></span>
        </label>
        <span className="checkbox__slider">Короткометражки</span>
      </div>
    </>
  )
}

export default Checkbox;