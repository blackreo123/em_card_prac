import { useSelector } from "react-redux";
import {Table} from 'react-bootstrap';

export default function ListTable(props){
    const { 
        em_list
     } = useSelector((state) => state.list);
    
    return(
        <>
        <Table responsive="sm">
        <thead>
            <tr>
                <th>名前</th><th>性別</th><th>部署</th><th>ユニット</th><th>入社日</th><th>メール</th>
            </tr>
        </thead>
        <tbody> 
            {em_list.map((item)=>{
                return(
                    <tr>
                        <td>{item.name}</td><td>{item.sex}</td><td>{item.dp}</td><td>{item.un}</td><td>{item.date}</td><td>{item.mail}</td>
                    </tr>
                );
            })}
        </tbody>   
        </Table>
        </>
    );
}