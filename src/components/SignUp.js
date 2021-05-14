import { Button } from 'bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import request from '../functions/request';
import { signActions } from '../store/reducers/signPg';
import Format from './Format';




export default function SignUp() {
    const { 
        dplist      
    } = useSelector((state) => state.signUp);
    const dispatch = useDispatch();


    useEffect(async()=>{
        //部署リストを取得する
        const dplist = await request('http://localhost:3001/getDpList',{what : 'null'});
        dispatch(signActions.setDplist(['選択してください',...dplist.map((item)=>item)]));
    },[])

    return (
        <>
           <Format></Format> 
        </>
    )
}