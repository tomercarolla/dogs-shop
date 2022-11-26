import {createContext, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";
import {createAction} from "../utils/reducer/reducer.utils";

//value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw Error(`Error message: ${type}`)
    }
}

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const {currentUser} = state;

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        return onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
