import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers';


export default configureStore({
    reducer: {
        user: userSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
});
