import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from '../features/userSlicer';
import tabReducer from '../features/tabSlicer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const rootReducer = combineReducers({
    user: userReducer,
    tab: tabReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch