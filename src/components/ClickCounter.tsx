interface ClickCounterProps{
    value: number;
    onUpdateClick: ()=> void;
}

const ClickCounter =({value, onUpdateClick}: ClickCounterProps)=>{
 
    return(
        <div>
            <button type="button" className="buttonClick" onClick={onUpdateClick}>click</button>
            <p>{value}</p>
        </div>
    )
}
export default ClickCounter;