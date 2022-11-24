import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component.jsx";

import Button from "../button/button.component";
import {SignUpFormStyles} from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) return;

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('User creation error', error.message)
            }
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpFormStyles>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="DisplayName"
                    type="text"
                    id="displayName"
                    name="displayName"
                    required
                    onChange={handleChange}
                    value={displayName}/>

                <FormInput
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}/>

                <FormInput
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}/>

                <FormInput
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    onChange={handleChange}
                    value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpFormStyles>
    )
}

export default SignUpForm;
