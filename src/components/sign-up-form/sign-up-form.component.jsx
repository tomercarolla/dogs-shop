import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

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
            console.log({user})
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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display name</label>
                <input type="text"
                       id="displayName"
                       name="displayName"
                       required
                       onChange={handleChange}
                       value={displayName}/>

                <label htmlFor="email">Email</label>
                <input type="email"
                       id="email"
                       name="email"
                       required
                       onChange={handleChange}
                       value={email}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required onChange={handleChange} value={password}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required onChange={handleChange}
                       value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
