import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, useHistory, useRouteMatch } from "react-router";
import request from "../functions/request";
import { signActions } from "../store/reducers/signPg";
import Format from "./Format";
import Input from "./Input";
import InputDate from "./InputDate";

import SelectBox from "./SelectBox";
import Update from "./Update";


export default function Detail2(props){
    

    const history = useHistory()
    const {
        unlist, selectedEm

    } = useSelector((state) => state.signUp);
    
    const dispatch = useDispatch();
    
    
    useEffect(async()=>{
        
        // console.log(selectedEm.dp_id)
        const un = await request('http://localhost:3001/getUnList', { dp_id: selectedEm.dp_id });
        dispatch(signActions.setUnlist(['選択してください', ...un.map((item) => item)]));
     
    },[selectedEm])
    
    
    
    return(
        <>
        { !unlist[0] ? null : <Update></Update>}
        
               </>
           
        
    )
}