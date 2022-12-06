import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {rootReducer} from "./root-reducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);

