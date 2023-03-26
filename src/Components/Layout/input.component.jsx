const Input = ({ type, name, label, isRequired, value, onChangeHandler }) => {

  return (
    <div className="form__group">
        <label htmlFor={name}>{label} {isRequired? <span>*</span>: null}</label>
        <input
            type={type}
            name={name}
            aria-label={label}
            aria-required={isRequired? "true" : "false"}
            value={value} 
            onChange={onChangeHandler} 
        />
    </div>
  )
}

export default Input;