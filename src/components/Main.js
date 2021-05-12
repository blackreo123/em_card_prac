import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../store/reducers/listPg";
import request from "../functions/request";
import ListTable from "./ListTable";

export default function Main() {
    const { 
            
         } = useSelector((state) => state.list);
    const dispatch = useDispatch();

    useEffect(async()=>{
        //메인화면 리스트 가져오기
        const list = await request('http://localhost:3001/getList',{what : 'null'});
        dispatch(listActions.setEm_list(list));
        
    },[])
    return (
        <>
        <ListTable></ListTable>
        </>
    )
}
