import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import request from "../functions/request";
import { signActions } from "../store/reducers/signPg";
import Detail2 from "./Detail2";



export default function Detail(props){
    const em_num = props.location.state.params.em_num;
    // console.log(em_num)
    // const [test,SetTest] = useState();
    // SetTest(em_num);

    const {
         selectedEm
    } = useSelector((state) => state.signUp);
    const dispatch = useDispatch();

    useEffect( async ()=>{
            
            // console.log(em_num)
            //部署リストを取得する
            const dplist = await request('http://localhost:3001/getDpList',{what : 'null'});
            dispatch(signActions.setDplist(['選択してください',...dplist.map((item)=>item)]));
            
            const selectEm = await request('http://localhost:3001/getOne', { em_num: em_num });
            dispatch(signActions.setSelectedEm(selectEm))
        
    },[])

    
    return(
        <>
        { !selectedEm ? null : <Detail2></Detail2>}
       </>
           
        
    )
}