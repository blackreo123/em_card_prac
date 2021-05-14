

export default function SelectBox(props){

    
    return(
        <>
        <select onChange = {props.onChange} disabled={props.TorF} value={props.options[props.toSentaku]} className={props.className}>
            {props.options.map((item, index)=>{
                    return item ==='選択してください' 
                            ? <option id=''>{item}</option>
                            : <option key={index} id={item.id}>{item.name}</option>
                })}
        </select>   
        </>
    )
}