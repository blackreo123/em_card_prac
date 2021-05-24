import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../css/searchBar.css';
import request from "../functions/request";
import { listActions } from "../store/reducers/listPg";
import { signActions } from "../store/reducers/signPg";
import Input from "./Input";
import SelectBox from "./SelectBox";

export default function SearchBar(){
    const { 
        em_list      ,searchName
    } = useSelector((state) => state.list);

    const { 
        dplist, unlist , TorF   , toSentaku, s_dp_id, s_un_id, s_dp_name, s_un_name,val,uval
    } = useSelector((state) => state.signUp);
    const dispatch = useDispatch()
    
    const selectBusho = async (e) => {
        //id属性の値
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const id = el.getAttribute('id');
        const value = e.target.value;
        // console.log(id); 
        if (e.target.value !== '選択してください') {
            dispatch(signActions.setVal(e.target.value))
            dispatch(signActions.setS_dp_name(value));
            //ユニットを　「選択してください」　に変更
            dispatch(signActions.setToSentaku(0))
            //uval에 아무값이나...
            dispatch(signActions.setUval('a'))
            //선택한 유닛 아이디 값을 ''로 변경
            dispatch(signActions.setS_un_id(''));
            // 部署を選択したらユニットリストを持ってくる
            const unList = await request('http://localhost:3001/getUnList', { dp_id: id });
            
            dispatch(signActions.setUnlist(['選択してください', ...unList.map((item) => item)]));
            //選択した部署id
            dispatch(signActions.setS_dp_id(id));
            //ユニット活性化
            dispatch(signActions.setTorF(false));
        } else {
            dispatch(signActions.setVal(e.target.value))
            dispatch(signActions.setS_un_name(''));
            dispatch(signActions.setS_dp_name(''));
            //選択した部署id
            dispatch(signActions.setS_dp_id(id));
            //선택한 유닛 아이디 값을 ''로 변경
            dispatch(signActions.setS_un_id(''));
            //ユニットを　「選択してください」　に変更
            dispatch(signActions.setToSentaku(0))
            //uval에 아무값이나...
            dispatch(signActions.setUval('a'))
            //ユニット非活性化
            dispatch(signActions.setTorF(true));
        }
    }

    //選択したユニットid
    const selectUn = (e) => {
        //id属性の値
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const id = el.getAttribute('id');
        const value = e.target.value;
        if(value === '選択してください'){
            dispatch(signActions.setS_un_name(''));
            dispatch(signActions.setUval(e.target.value))
        }else{
            dispatch(signActions.setS_un_name(value));
            dispatch(signActions.setUval(e.target.value))
        }
        dispatch(signActions.setS_un_id(id));
        
    }

    //ユニット項目初期化
    useEffect(() => {
        dispatch(signActions.setToSentaku(''))
    }, [toSentaku])

    //셀렉트 박스 밸류 초기화하기
    // useEffect(()=>{
    //     dispatch(signActions.setVal(''))
    //     dispatch(signActions.setUval(''))
    // },[val, uval])

    const searchForNmae = (e) =>{
        dispatch(listActions.setSearchName(e.target.value))
    }
    return(
        <>
        <center>
        <div className='searchBarGrop'>
            部署
            <SelectBox className='search-1' options={dplist} onChange={selectBusho} val={val} ></SelectBox>
            ユニット
            <SelectBox className='search-2' options={unlist} TorF={TorF} toSentaku={toSentaku} onChange={selectUn} val={uval} ></SelectBox>
            名前
            <Input className='search-3' onChange={searchForNmae}></Input>
            
            
            
            
        </div>
        </center>
        </>
    )
}