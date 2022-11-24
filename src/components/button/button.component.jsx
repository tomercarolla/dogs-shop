import {DefaultButton, GoogleSignInButton, InvertedButton} from "./button.styles";

export const Color = {
    default: 'default',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getColor = (color = Color.default) => (
    {
        [Color.default]: DefaultButton,
        [Color.google]: GoogleSignInButton,
        [Color.inverted]: InvertedButton
    }[color]
)

const Button = ({children, color, ...btnProps}) => {

    const CustomButton = getColor(color);

    return (
        <CustomButton {...btnProps}>{children}</CustomButton>
    )
}

export default Button;
