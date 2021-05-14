import { configureStore } from '@reduxjs/toolkit'
import listReducers from "./reducers/listPg";
import signUpReducers from "./reducers/signPg"

export default configureStore({
    reducer: {
        list: listReducers,
        signUp : signUpReducers
    },
})