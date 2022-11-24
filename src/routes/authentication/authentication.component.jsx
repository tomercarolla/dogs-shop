import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import {AuthComponentStyles} from "./authentication.styles";

const Authentication = () => {
    return (
        <AuthComponentStyles>
            <SignInForm/>
            <SignUpForm/>
        </AuthComponentStyles>
    )
}

export default Authentication;
