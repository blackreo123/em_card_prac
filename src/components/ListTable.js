import { useDispatch, useSelector } from "react-redux";
import {Table} from 'react-bootstrap';
import { useEffect, useState } from "react";

export default function ListTable(props){
    const { 
        em_list, searchName
     } = useSelector((state) => state.list);
    
     const { 
        dplist, unlist , TorF   , toSentaku, s_dp_id, s_un_id ,s_dp_name, s_un_name
    } = useSelector((state) => state.signUp);
    const dispatch = useDispatch()

    const [filteredList,setFilteredList] = useState([]);
    
    return(
        <>
        
        <Table responsive="sm">
        <thead>
            <tr>
                <th>名前</th><th>性別</th><th>部署</th><th>ユニット</th><th>入社日</th><th>メール</th>
            </tr>
        </thead>
        <tbody> 
            {em_list.filter((i)=>{
                return i.dp_name.indexOf(s_dp_name) > -1;    
            }).filter((i)=>{
                return i.un_name.indexOf(s_un_name) > -1;    
            }).filter((i)=>{
                return i.name.indexOf(searchName) > -1;
            }).map((item)=>{
                return(
                    <tr>
                        <td>{item.name}</td><td>{item.sex}</td><td>{item.dp_name}</td><td>{item.un_name}</td><td>{item.date}</td><td>{item.mail}</td>
                    </tr>
                );
            })}
        </tbody>   
        </Table>
        </>
    );
}