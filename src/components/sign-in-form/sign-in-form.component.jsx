import {useState} from "react";
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component.jsx";

import Button, {Color} from "../button/button.component";
import {SignInFormStyles} from "./sign-in-form.styles";
import {useNavigate} from "react-router-dom";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            navigate('/');
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
        await signInWithGooglePopup();
        navigate('/');
    }

    return (
        <SignInFormStyles>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}/>

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}/>

                <div className="btn-container">
                    <Button type="submit">Sign In</Button>
                    <Button color={Color.google} type="button" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </SignInFormStyles>
    )
}

export default SignInForm;
