import {FormInputStyles, FormLabelStyles, FormStyles} from "./form-input.styles";

const FormInput = ({label, ...inputProps}) => {
    return (
        <FormStyles>
            <FormInputStyles {...inputProps}/>
            {
                label &&
                <FormLabelStyles shrink={inputProps.value.length}>{label}</FormLabelStyles>
            }
        </FormStyles>
    )
}

export default FormInput;
