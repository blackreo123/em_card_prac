import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name : 'signUp',
    initialState : {
        dplist : [],
        unlist : [],
        TorF : true,
        toSentaku : '',
        s_dp_id : '',
        s_un_id: '',
        in_em_num : '',
        kan_first : '', 
        kan_last : '', 
        huri_first : '', 
        huri_last : '', 
        en_first : '', 
        en_last : '',
        kai_mail : '',
        kojin_mail : '',
        mynum : '',
        school : '',
        sotsu : '',
        major : '',
        comming : '',
        birth : '',
        sex : '男',
        jp_contact_post : '',
        jp_contact_address : '', 
        jp_contact_phone : '', 
        jp_contact_home : '',
        motherland_post : '', 
        motherland_address : '', 
        motherland_phone : '', 
        motherland_home : '',
        kinkyu_kankei : '',
        kinkyu_num : '',
        kinkyu_name : '',
        s_un_name : '',
        s_dp_name : '',
        selectedEm : '',
        val : '',
        uval: ''
    },
    reducers : {
        
        //部署リストを取得する
        setDplist : (state,action) => {
            state.dplist = action.payload;
        },

        //ユニットリストを取得する
        setUnlist : (state,action) => {
            state.unlist = action.payload;
        },

        //True or false
        setTorF : (state,action) => {
            state.TorF = action.payload;
        },
        //選択してください　に変更
        setToSentaku : (state,action) => {
            state.toSentaku = action.payload;
        },
        //選択した部署id
        setS_dp_id: (state,action) => {
            state.s_dp_id = action.payload;
        },
        //選択したunit id
        setS_un_id: (state,action) => {
            state.s_un_id = action.payload;
        },
        //選択した部署id
        setS_dp_name: (state,action) => {
            state.s_dp_name = action.payload;
        },
        //選択したunit id
        setS_un_name: (state,action) => {
            state.s_un_name = action.payload;
        },
        ////入力した入社番号
        setIn_em_num: (state,action) => {
            state.in_em_num = action.payload;
        },

        //names
        setKan_first : (state,action) => {
            state.kan_first = action.payload;
        },
        setKan_last : (state,action) => {
            state.kan_last = action.payload;
        },
        setHuri_first : (state,action) => {
            state.huri_first = action.payload;
        },
        setHuri_last : (state,action) => {
            state.huri_last = action.payload;
        },
        setEn_first : (state,action) => {
            state.en_first = action.payload;
        },
        setEn_last : (state,action) => {
            state.en_last = action.payload;
        },

        //mails
        setKai_mail : (state,action) => {
            state.kai_mail = action.payload;
        },
        setKojin_mail : (state,action) => {
            state.kojin_mail = action.payload;
        },

        //my number
        setMynum : (state,action) => {
            state.mynum = action.payload;
        },
        //school
        setSchool : (state,action) => {
            state.school = action.payload
        },
        //卒業年日
        setSotsu : (state,action) => {
            state.sotsu = action.payload
        },
        //major
        setMajor : (state,action) => {
            state.major = action.payload
        },
        //入社日
        setComming : (state,action) => {
            state.comming = action.payload
        },
        //生年月日
        setBirth: (state,action) => {
            state.birth = action.payload
        },
        //性別
        setSex: (state,action) => {
            state.sex = action.payload
        },
        //日本の住所
        setJp_contact_post : (state,action) => {
            state.jp_contact_post = action.payload
        },
        setJp_contact_address : (state,action) => {
            state.jp_contact_address = action.payload
        },
        setJp_contact_phone : (state,action) => {
            state.jp_contact_phone = action.payload
        },
        setJp_contact_home : (state,action) => {
            state.jp_contact_home = action.payload
        },

        //母国の住所
        setMotherland_post : (state,action) => {
            state.motherland_post = action.payload
        },
        setMotherland_address : (state,action) => {
            state.motherland_address = action.payload
        },
        setMotherland_phone : (state,action) => {
            state.motherland_phone = action.payload
        },
        setMotherland_home : (state,action) => {
            state.motherland_home = action.payload
        },

        // 緊急連絡先
        setKinkyu_kankei : (state,action) => {
            state.kinkyu_kankei = action.payload
        },
        setKinkyu_num : (state,action) => {
            state.kinkyu_num = action.payload
        },
        setKinkyu_name : (state,action) => {
            state.kinkyu_name = action.payload
        },
        
        //選択した人
        setSelectedEm : (state,action) => {
            state.selectedEm = action.payload
        },
        setVal : (state,action) => {
            state.val = action.payload
        },
        setUval : (state,action) => {
            state.uval = action.payload
        },
}
    
});

export const {
    setDplist,
    setUnlist,
    setTorF,
    setToSentaku,
    setS_dp_id,
    setS_un_id,
    setIn_em_num,
    setKan_first,
    setKan_last,
    setHuri_first,
    setHuri_last,
    setEn_first,
    setEn_last,
    setKai_mail,
    setKojin_mail,
    setMynum,
    setSchool,
    setSotsu,
    setMajor,
    setComming,
    setBirth,
    setSex,
    setJp_contact_post,
    setJp_contact_address,
    setJp_contact_phone,
    setJp_contact_home,
    setMotherland_post,
    setMotherland_address,
    setMotherland_phone,
    setMotherland_home,
    setKinkyu_kankei,
    setKinkyu_name,
    setKinkyu_num,
    setS_dp_name,
    setS_un_name,
    setVal,
    setUval

    
} = slice.actions;

export const signActions = { ...slice.actions };
export default slice.reducer;