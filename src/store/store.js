import { configureStore } from '@reduxjs/toolkit'
import listReducers from "./reducers/listPg";
export default configureStore({
    reducer: {
        list: listReducers
    },
})