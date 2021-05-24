export default function EachCheckBox(props){
    return(
        <input type='checkBox' onChange={props.onChange} kind={props.id} checked={props.checkedItem.includes(props.id)}
                
        ></input>
    )
}