import { Button } from 'bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import '../css/format.css';
import request from '../functions/request';
import { signActions } from '../store/reducers/signPg';
import Input from './Input';
import InputDate from './InputDate';
import SelectBox from './SelectBox';

export default function Update(props){
    
    
        
        const [isNone, setIsNone] = useState('none');
        const history = useHistory()
        const {
            dplist, unlist, TorF, toSentaku, s_dp_id, s_un_id, in_em_num, 
            kan_first, kan_last, huri_first, huri_last, en_first, en_last,
            kai_mail, kojin_mail,selectedEm , val,uval
    
        } = useSelector((state) => state.signUp);
        const dispatch = useDispatch();
        
      

        const selectBusho = async (e) => {
            //id属性の値
            const index = e.target.selectedIndex;
            const el = e.target.childNodes[index]
            const id = el.getAttribute('id');
            
            if (e.target.value !== '選択してください') {
                dispatch(signActions.setVal(e.target.value))
                
                // //ユニットを　「選択してください」　に変更
                dispatch(signActions.setToSentaku(0))
                //uval에 아무값이나...
                dispatch(signActions.setUval('a'))
                //ユニット活性化
                dispatch(signActions.setTorF(false));
                // 部署を選択したらユニットリストを持ってくる
                const un = await request('http://localhost:3001/getUnList', { dp_id: id });
                dispatch(signActions.setUnlist(['選択してください', ...un.map((item) => item)]));
                //選択した部署id
                dispatch(signActions.setS_dp_id(id));
                
                
                
            } else {
                // //ユニットを　「選択してください」　に変更
                dispatch(signActions.setToSentaku(0))
                //uval에 아무값이나...
                dispatch(signActions.setUval('a'))
                //ユニット非活性化
                dispatch(signActions.setTorF(true));
                //ユニットを　「選択してください」　に変更
                dispatch(signActions.setVal(e.target.value))
                dispatch(signActions.setS_dp_id(''));              
                dispatch(signActions.setS_un_id(''));    
            }
        }
    
        //選択したユニットid
        const selectUn = (e) => {
            //id属性の値
            const index = e.target.selectedIndex;
            const el = e.target.childNodes[index]
            const id = el.getAttribute('id');
            if (e.target.value !== '選択してください') {
                dispatch(signActions.setS_un_id(id));
                dispatch(signActions.setUval(e.target.value))
            }else{
                dispatch(signActions.setS_un_id(''));
                dispatch(signActions.setUval(e.target.value))
            }       
        }
        // useEffect(() => {
        //     dispatch(signActions.setVal(''))
            
        // }, [val])
        // ユニット項目初期化
        useEffect(() => {
            
            dispatch(signActions.setToSentaku(''))
        }, [toSentaku])
    
        // //셀렉트 박스 밸류 초기화하기
        // useEffect(()=>{
        //     dispatch(signActions.setVal(''))
        //     dispatch(signActions.setUval(''))
        // },[val, uval])

        //入力した入社番号
        const what_em_num = (e) => {
            dispatch(signActions.setIn_em_num(e.target.value))
        }
        //inputed names
        const in_kan_fist = (e) => {
            dispatch(signActions.setKan_first(e.target.value))
        }
        const in_kan_last = (e) => {
            dispatch(signActions.setKan_last(e.target.value))
        }
        const in_huri_fist = (e) => {
            dispatch(signActions.setHuri_first(e.target.value))
        }
        const in_huri_last = (e) => {
            dispatch(signActions.setHuri_last(e.target.value))
        }
        const in_en_fist = (e) => {
            dispatch(signActions.setEn_first(e.target.value))
        }
        const in_en_last = (e) => {
            dispatch(signActions.setEn_last(e.target.value))
        }
    
        //mails
        const in_kai_mail = (e) => {
            dispatch(signActions.setKai_mail(e.target.value))
        }
        const in_kojin_mail = (e) => {
            dispatch(signActions.setKojin_mail(e.target.value))
        }
    
        //mynum
        const in_mynum = (e) => {
            dispatch(signActions.setMynum(e.target.value))
        }
        //school
        const in_school = (e) => {
            dispatch(signActions.setSchool(e.target.value))
        }
        //major
        const in_major = (e) => {
            dispatch(signActions.setMajor(e.target.value))
        }
        //卒業年月日
        const in_sotsu = (e) => {
            dispatch(signActions.setSotsu(e.target.value))
        }
        //入社日
        const in_comming = (e) => {
            dispatch(signActions.setComming(e.target.value))
        }
        //生年月日
        const in_birth = (e) => {
            dispatch(signActions.setBirth(e.target.value))
        }
        //sex
        const in_sex = (e) => {
            dispatch(signActions.setSex(e.target.value))
        }
        //日本の住所
        const in_jp_contact_post = (e) => {
            dispatch(signActions.setJp_contact_post(e.target.value))
        }
        const in_jp_contact_address = (e) => {
            dispatch(signActions.setJp_contact_address(e.target.value))
        }
        const in_jp_contact_phone = (e) => {
            dispatch(signActions.setJp_contact_phone(e.target.value))
        }
        const in_jp_contact_home = (e) => {
            dispatch(signActions.setJp_contact_home(e.target.value))
        }
    
        //母国の住所
        const in_motherland_post = (e) => {
            dispatch(signActions.setMotherland_post(e.target.value))
        }
        const in_motherland_address = (e) => {
            dispatch(signActions.setMotherland_address(e.target.value))
        }
        const in_motherland_phone = (e) => {
            dispatch(signActions.setMotherland_phone(e.target.value))
        }
        const in_motherland_home = (e) => {
            dispatch(signActions.setMotherland_home(e.target.value))
        }
    
        // 緊急連絡先
        const in_kinkyu_kankei = (e) => {
            dispatch(signActions.setKinkyu_kankei(e.target.value))
        }
        const in_kinkyu_num = (e) => {
            dispatch(signActions.setKinkyu_num(e.target.value))
        }
        const in_kinkyu_name = (e) => {
            dispatch(signActions.setKinkyu_name(e.target.value))
        }
    
        //수정 누르면 마우스 포인터 활성화
        const pointer = () => {
            setIsNone('');
        }
        //모도루
        const modoru = () => {
            // history.push('/detail')
            history.push('/')
            // window.location.replace('/')
        }
        //수정사항 업데이트
        const send = async() => {
            let temp = {...selectedEm}
            // console.log(temp)
            
            temp['dp_id'] = s_dp_id ==='' ? temp.dp_id  : s_dp_id
            temp['un_id'] = s_un_id ==='' ? temp.un_id  : s_un_id
            temp['em_kan_first'] = kan_first ==='' ? temp.em_kan_first  : kan_first
            temp['em_kan_last'] = kan_last ==='' ? temp.em_kan_last  : kan_last
            temp['em_huri_first'] = huri_first ==='' ? temp.em_huri_first  : huri_first
            temp['em_huri_last'] = huri_last ==='' ? temp.em_huri_last  : huri_last
            temp['em_en_first'] = en_first ==='' ? temp.em_en_first  : en_first
            temp['em_en_last'] = en_last ==='' ? temp.em_en_last  : en_last
            temp['em_kai_mail'] = kai_mail ==='' ? temp.em_kai_mail  : kai_mail
            temp['em_kojin_mail'] = kojin_mail ==='' ? temp.em_kojin_mail  : kojin_mail
            console.log(temp)

            await request('http://localhost:3001/update_em',{
            em_num : temp['em_num'], dp_id : temp['dp_id'], un_id : temp['un_id'], em_kan_first : temp['em_kan_first'],
            em_kan_last : temp['em_kan_last'], em_huri_first : temp['em_huri_first'],em_huri_last : temp['em_huri_last']
            ,em_en_first : temp['em_en_first'],em_en_last : temp['em_en_last'],em_kai_mail : temp['em_kai_mail']
            ,em_kojin_mail : temp['em_kojin_mail']})
        
            
        }
        return (
            <>
            <div style={{ 'pointer-events': isNone}}>
            
                <center>
                    <h1>人事記録カード登録</h1>
                </center>
                <center>
                    <div className='signUp-container'>
                        <div className='item memberNum'>
                            <div className='memberNum-1'>社員番号</div>
                            <div className='memberNum-2'><Input onChange={what_em_num} em={selectedEm.em_num} /></div>
                        </div>
                        <div className='blank1'></div>
                        <div className='item mkdate'>
                            <div className='mkdate-1'>作成日</div><div className='mkdate-2'><input type='date'></input></div>
                        </div>
                        <div className='item memberDate'>
                            <div className='memberDate-1'>入社日</div>
                            <div className='memberDate-2'><InputDate onChange={in_comming} em={selectedEm.em_date} /></div>
                        </div>
                        <div className='item dp'>
                            <div className='dp-1'>所属</div>
                            {/* 部署 */}
                            <div className='dp-2'>
                                <SelectBox options={dplist} onChange={selectBusho} em={selectedEm.dp_id} val={val}></SelectBox>
                            </div>
                            {/* ユニット */}
                            <div className='dp-3'>
                               
                            <SelectBox options={unlist} toSentaku={toSentaku} onChange={selectUn} em={selectedEm.un_id} val={uval} TorF={TorF}></SelectBox>  
                            
                                
                            </div>
                        </div>
                        <div className='item picture'>写真</div>
                        <div className='item name'>
                            <div className='namae'>名前</div>
                            <div className='kubun'>区分</div>
                            <div className='fname dr'>姓</div>
                            <div className='lname d'>名</div>
                            
                            <div className='kanji dr'>漢字</div>
                            {/* 漢字の姓 */}
                            <div className='dr'><Input onChange={in_kan_fist} em={selectedEm.em_kan_first}></Input></div>
                            {/* 漢字の名 */}
                            <div className='d'><Input onChange={in_kan_last} em={selectedEm.em_kan_last}></Input></div>
    
                            <div className='huri dr'>フリガナ</div>
                            {/* フリガナの姓 */}
                            <div className='dr'><Input onChange={in_huri_fist} em={selectedEm.em_huri_first}></Input></div>
                            {/* フリガナの名 */}
                            <div className='d'><Input onChange={in_huri_last} em={selectedEm.em_huri_last}></Input></div>
    
                            <div className='en r'>英文(PASSPORT)</div>
                            {/* 英文の姓 */}
                            <div className='r'><Input onChange={in_en_fist} em={selectedEm.em_en_first}></Input></div>
                            {/* 英文の名 */}
                            <div><Input onChange={in_en_last} em={selectedEm.em_en_last}></Input></div>
                        </div>
                        <div className='item birth'>
                            <div className='birth-1'>生年月日（西暦）</div>
                            <div className='birth-2'><InputDate onChange={in_birth} em={selectedEm.em_birthday}/></div>
                        </div>
                        <div className='item email'>
                            <div className='email-1'>メール</div>
                            <div className='email-2'>
                                <div className='kaisha'>
                                    <div className='kaisha-1'>会社</div>
                                    <div className='kaisha-2'><Input onChange={in_kai_mail} em={selectedEm.em_kai_mail}/></div>
                                </div>
                                <div className='kojin'>
                                    <div className='kojin-1'>個人</div>
                                    <div className='kojin-2'><Input onChange={in_kojin_mail} em={selectedEm.em_kojin_mail}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='item sex'>
                            <div className='sex-1'>性別</div>
                            <div className='sex-2'>
                                <select onChange={in_sex} defaultValue={selectedEm.em_sex}>
                                    <option>
                                        男
                                </option>
                                    <option>
                                        女
                                </option>
                                </select>
                            </div>
                        </div>
                        <div className='item mynum'>
                            <div className='mynum-1'>マイナンバー（個人番号）</div>
                            <div className='mynum-2'><Input onChange={in_mynum} em={selectedEm.em_mynum}/></div>
                        </div>
                        <div className='item nihon'>
                            <div className='nihon-1'>日本連絡先</div>
                            <div className='address'>住所</div>
                            <div className='post'>
                                <div className='post-1'>（〒）</div>
                                <div className='post-2'><Input onChange={in_jp_contact_post} /></div>
                            </div>
                            <div className='jhome'>
                                <div className='jhome-1'>（住所）</div>
                                <div className='jhome-2'><Input onChange={in_jp_contact_address} /></div>
                            </div>
                            <div className='jren'>連絡先</div>
                            <div className='jren-1'>
                                <div className='phone'>
                                    <div className='phone-1'>携帯</div>
                                    <div className='phone-2'><Input onChange={in_jp_contact_phone} /></div>
                                </div>
                                <div className='jitaku'>
                                    <div className='jitaku-1'>自宅</div>
                                    <div className='jitaku-2'><Input onChange={in_jp_contact_home} /></div>
                                </div>
                            </div>
    
                        </div>
                        <div className='item bokoku'>
                            <div className='bokoku-1'>母国連絡先（外国籍のみ）</div>
                            <div className='baddress'>住所（母国語で）</div>
                            <div className='bpost'>
                                <div className='bpost-1'>（〒）</div>
                                <div className='bpost-2'><Input onChange={in_motherland_post} /></div>
                            </div>
                            <div className='bhome'>
                                <div className='bhome-1'>（住所）</div>
                                <div className='bhome-2'><Input onChange={in_motherland_address} /></div>
                            </div>
                            <div className='bren'>連絡先</div>
                            <div className='bren-1'>
                                <div className='bphone'>
                                    <div className='bphone-1'>携帯</div>
                                    <div className='bphone-2'><Input onChange={in_motherland_phone} /></div>
                                </div>
                                <div className='bjitaku'>
                                    <div className='bjitaku-1'>自宅</div>
                                    <div className='bjitaku-2'><Input onChange={in_motherland_home} /></div>
                                </div>
                            </div>
                        </div>
                        <div className='item kinkyu'>
                            <div className='kinkyu-1'>緊急連絡先</div>
                            <div className='kinalert'>*本人と連絡が取れない場合の連絡先(家族など)をご記載ください。</div>
                            <div className='kin-name'>
                                <div className='kin-name-1'>名前</div>
                                <div className='kin-name-2'><Input onChange={in_kinkyu_name} /></div>
                            </div>
                            <div className='kankei'>
                                <div className='kankei-1'>関係</div>
                                <div className='kankei-2'><Input onChange={in_kinkyu_kankei} /></div>
                            </div>
                            <div className='kinren'>
                                <div className='kinren-1'>連絡先</div>
                                <div className='kinren-2'><Input onChange={in_kinkyu_num} /></div>
                            </div>
    
                        </div>
                        <div className='item rireki'>
                            <div className='rireki-1'>履歴</div>
                            <div className='gakureki'>
                                <div className='gakureki-1'>学歴</div>
                                <div className='gakureki-2'>
                                    <div className='school'>出身校(最終)</div>
                                    <div className='sotsu'>卒業年月日</div>
                                    <div className='major'>専攻(OO科)</div>
                                </div>
                                <div className='gakureki-3'>
                                    {/* 学校 */}
                                    <div className='dr'><Input onChange={in_school} /></div>
                                    {/* 卒業 */}
                                    <div className='dr'><InputDate onChange={in_sotsu} /></div>
                                    {/* 専攻 */}
                                    <div className='dr'><Input onChange={in_major} /></div>
                                </div>
                            </div>
                            <div className='gakureki'>
                                <div className='gakureki-1'>
                                    <pre>
                                        教育機関
    
                                        (該当者のみ)
                                </pre>
                                </div>
                                <div className='gakureki-2'>
                                    <div className='school'>機関名</div>
                                    <div className='sotsu'>履修課程名</div>
                                    <div className='major'>教育期間</div>
                                </div>
                                <div className='gakureki-3'>
                                    <div className='d'><input type='text' /></div>
                                    <div className='d'><input type='text' /></div>
                                    <div className='d kikan'><input type='date' /><div>~</div><input type='date' /></div>
                                </div>
                            </div>
                            <div className='keireki'>
                                <div className='keireki-1'>経歴</div>
                                <div className='shamei'>
                                    <div className='shamei-1'>会社名</div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='r'><input type='text'></input></div>
                                </div>
                                <div className='kinmukikan'>
                                    <div className='kinmukikan-1'>勤務期間</div>
                                    <div className='dr'>入社</div>
                                    <div className='dr'>退社</div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='r'><input type='text'></input></div>
                                    <div className='r'><input type='text'></input></div>
                                </div>
                                <div className='saisyu'>
                                    <div className='saisyu-1'>最終役職</div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='dr'><input type='text'></input></div>
                                    <div className='r'><input type='text'></input></div>
                                </div>
    
                            </div>
                            <div className='tanku'>
                                <div className='tantou'>担当業務(具体的に)</div>
                                <div className='kuni'>区分 (国内/国外)</div>
                                <div className='dr'><input type='text'></input></div>
                                <div className='d'><select><option>選択してください</option><option>国内</option><option>国外</option></select></div>
                                <div className='dr'><input type='text'></input></div>
                                <div className='d'><select><option>選択してください</option><option>国内</option><option>国外</option></select></div>
                                <div className='dr'><input type='text'></input></div>
                                <div className='d'><select><option>選択してください</option><option>国内</option><option>国外</option></select></div>
                                <div className='dr'><input type='text'></input></div>
                                <div className='d'><select><option>選択してください</option><option>国内</option><option>国外</option></select></div>
                                <div className='r'><input type='text'></input></div>
                                <div><select><option>選択してください</option><option>国内</option><option>国外</option></select></div>
                            </div>
    
    
                        </div>
                        <div className='item mibun'>
                            <div className='mibun-1'>身分証明書情報</div>
                            <div className='pazai'>
                                <div className='passport'>
                                    <div className='passport-1'>パスポート 情報 (外国籍のみ)</div><div className='passport-2'>(写真ページ添付)</div>
                                </div>
                                <div className='zairyu'>
                                    <div className='zairyu-1'>在留カード 情報 (外国籍のみ)</div>
                                    <div className='uraomo'>
                                        <div className='omo'>表</div>
                                        <div className='ura'>裏</div>
                                    </div>
                                    <div className='zairyu-2'>
                                        <div className='zaisha'>(写真添付)</div>
                                        <div className='zaisha'>(写真添付)</div>
                                    </div>
    
                                </div>
                            </div>
                            <div className='pazai'>
                                <div className='passport'>
                                    <div className='passport-1'>口座情報</div><div className='passport-2'>(通帳の1ページ目の写真添付)</div>
                                </div>
                                <div className='fuck'>
                                    <div className='fuck-1'>
                                        <div className='dr'>パスポート番号</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>パスポート有効期限</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>パスポート発行国</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>在留カード番号</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>交付年月日</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>在留資格</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>在留期間</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>在留期限</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>銀行名/支店名</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>種類/口座番号</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>名義(フリガナ)</div><div className='d'><input type='text'></input></div>
                                    </div>
                                    <div className='fuck-1'>
                                        <div className='dr'>備考</div><div className='d'><input type='text'></input></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
                <center>
                    <div className='buttons'>
                        <span className='buttons-1'>
                            {isNone === 'none'
                                ?<button type="button" class="btn btn-primary" onClick={pointer} >修正</button>
                                :<button type="button" class="btn btn-primary" onClick={send} >完了</button>}
                            
                        </span>
                        <span className='buttons-1'>
                            <button type="button" class="btn btn-danger" onClick={modoru}>戻る</button>
                        </span>
                    </div>
                </center>
            </>
        )
    }
