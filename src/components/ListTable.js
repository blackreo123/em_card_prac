/* eslint-disable */

import { useDispatch, useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import EachCheckBox from "./EachCheckBox";
import request from "../functions/request";

export default function ListTable(props) {
    const history = useHistory();
    const {
        em_list, searchName
    } = useSelector((state) => state.list);

    const {
        s_dp_name, s_un_name
    } = useSelector((state) => state.signUp);

    const [filteredList, setFilteredList] = useState([]);
    const [checkedItem, setCheckedItem] = useState([]);
    
    
    useEffect(()=>{
        //전체리스트를 조건이 바뀔때마다 필터해서 필터된 리스트로 저장
        const nowList = em_list.filter((i)=>{
            return i.dp_name.indexOf(s_dp_name) > -1;
        }).filter((i)=>{
            return i.un_name.indexOf(s_un_name) > -1;
        }).filter((i)=>{
            return i.name.indexOf(searchName) > -1;
        })
        setFilteredList(nowList)
    },[s_dp_name,s_un_name,searchName, em_list])

    const isChecked = (e) => {
        const id = Number(e.target.attributes[1].value)
        let checked = e.target.checked; 
        if(checked){
            setCheckedItem([...checkedItem, id])       
        }else{
            setCheckedItem(checkedItem.filter((item)=>item !== id))
        }
    }
    //검색결과가 바뀌면 체크박스 초기화
    useEffect(()=>{
        setCheckedItem([])
    },[filteredList])
    const checkAll = (e) => {
        let checked = e.target.checked;
        if(checked){
            //전체 체크

            //모든 목록의 아이디를 체크 아이템에 넣기 먼저 한번 빈배열 넣어준다음
            setCheckedItem([])
            setCheckedItem(filteredList.map((item)=>item.em_num))
        }else{
            //전체 체크 해제
            
            //선택된 체크 아이디 배열에 빈배열 넣기
            setCheckedItem([])
        }
    }
    // useEffect(()=>{
    //     console.log(checkedItem)
    // },[checkedItem])

    const deleteEm = async() => {
        const deleQ = window.confirm('選択した項目を削除しますか？')
        if(deleQ){
            for(let i = 0; i<checkedItem.length; i++){
                console.log(String(checkedItem[i]))
                await request('http://localhost:3001/deleteEm',{em_num : checkedItem[i]});
            }
            window.location.replace("/")
        }
        
    }
    return (
        <>

            <Table responsive="sm">
                <thead>
                    <tr>
                        <th><input type='checkBox' onChange={checkAll} checked={filteredList.length === checkedItem.length}></input></th>
                        <th>名前</th><th>性別</th><th>部署</th><th>ユニット</th><th>入社日</th><th>メール</th><th></th>
                    </tr>
                </thead>
                <tbody>
                {filteredList.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td><EachCheckBox onChange={isChecked} id={item.em_num} checkedItem={checkedItem}></EachCheckBox></td>
                                <td>{item.name}</td>
                                <td>{item.sex}</td>
                                <td>{item.dp_name}</td>
                                <td>{item.un_name}</td>
                                <td>{item.date}</td>
                                <td>{item.mail}</td>
                                <td>
                                    <Link to={{
                                        pathname: '/detail',
                                        state: { params: { em_num: item.em_num} }
                                    }}>
                                        <button type="button" class="btn btn-primary">詳細</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <center>
                <button type="button" class="btn btn-danger" onClick={deleteEm}>削除</button>
            </center>
        </>
    );
}