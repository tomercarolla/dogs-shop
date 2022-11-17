import './button.styles.scss';

const BUTTON_STYLES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...btnProps}) => {
    return (
        <button
            className={`btn-container ${BUTTON_STYLES_CLASSES[buttonType]}`}
            {...btnProps}>
            {children}
        </button>
    )
}

export default Button;
