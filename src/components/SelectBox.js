/* eslint-disable */

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { signActions } from "../store/reducers/signPg";

export default function SelectBox(props) {




    const [val, setVal] = useState();
    

    useEffect(() => {
        if (props.val === '') {
            if (props.em) {
                console.log(props.em)
                const a = props.options.find(item => item.id === props.em)
                console.log(a)
                if(a)
                setVal(a.name)
            }
        } else if (props.val !== '') {
            // console.log(props.em)
            if (props.toSentaku === 0) {

                setVal(props.options[props.toSentaku])
            } else {

                setVal(props.val)
            }

        }

    }, [props.val, props.em, props.options])


    return (
        <>
            <select onChange={props.onChange} 
                    disabled={props.TorF}
                    value={val}
                    className={props.className}
            >
                {props.options.map((item, index) => {
                    return item === '選択してください'
                        ? <option id='' key={index}>{item}</option>
                        : <option key={index} id={item.id} value={item.name}>{item.name}</option>
                })}
            </select>
        </>
    )
}