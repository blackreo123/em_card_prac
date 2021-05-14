import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../store/reducers/listPg";
import request from "../functions/request";
import ListTable from "./ListTable";
import SearchBar from "./SearchBar";
import { signActions } from "../store/reducers/signPg";


export default function Main() {
    
    const dispatch = useDispatch();

    useEffect(async()=>{
        //메인화면 리스트 가져오기
        const list = await request('http://localhost:3001/getList',{what : 'null'});
        dispatch(listActions.setEm_list(list));
     
        //部署リストを取得する
        const dplist = await request('http://localhost:3001/getDpList',{what : 'null'});
        dispatch(signActions.setDplist(['選択してください',...dplist.map((item)=>item)]));
        
    },[])
    return (
        <>
        <SearchBar></SearchBar>
        <ListTable></ListTable>
        </>
    )
}
