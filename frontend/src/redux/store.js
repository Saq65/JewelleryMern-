import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import cartSlice from "./cartslice/CartSlice";
import userSlice from "./cartslice/AuthenticationSlice";

// Persist config
const persistConfig = {
    key: "root",
    storage
};

// Combine reducers
const rootReducer = combineReducers({
    allcart: cartSlice,
    user: userSlice,
});

// Apply persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;
