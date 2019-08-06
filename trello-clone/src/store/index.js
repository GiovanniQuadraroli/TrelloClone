import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key : "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () =>{
    let store = createStore(persistReducer)
    let persistor = persistStore(store)
    return { store,persistor }
}

