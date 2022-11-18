import {useState} from "react";
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component.ts";

import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('user not exist');
                    break;
                default:
                    console.log(error);
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

    /*
    Example with redirect and back to the app with useEffect.
    */
    // useEffect( () => {
    //     const loadData = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     loadData();
    // }, [])

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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

                <div className="btn-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" type="button" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
