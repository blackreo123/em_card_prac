export default function(props){
    
    return(
        <>
        
         <input type='text' key={props.em} 
                            onChange={props.onChange}
                            className={props.className} 
                            defaultValue={props.em} ></input>
        
        
        </>
    )
}