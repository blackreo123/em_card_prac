import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name : 'list',
    initialState : {
        em_list : []
        
        

    },
    reducers : {
        //메인화면 리스트
        setEm_list: (state, action) => {
            state.em_list = action.payload;
        }
    }
    
});

export const {
    setEm_list
    
} = slice.actions;

export const listActions = { ...slice.actions };
export default slice.reducer;