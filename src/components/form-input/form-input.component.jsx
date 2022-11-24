import './form-input.styles.scss'

const FormInput = ({label, ...inputProps}) => {
    return (
        <div className="input-group">
            <input className="form-input" {...inputProps}/>
            {
                label &&
                <label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}
                       htmlFor="displayName">{label}</label>
            }
        </div>
    )
}

export default FormInput;
