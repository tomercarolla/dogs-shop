import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

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

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;
