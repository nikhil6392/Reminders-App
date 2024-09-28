import PropTypes from 'prop-types'
import "./index.css"

function Remainder(props){
    function handleChange(){
        props.setIsComplete(!props.isComplete,props.id);
    }
    return (
        <div className={`grid grid-cols-3 gap-4 border-b${props.isComplete ? 'bg-green-100':'bg-red-100'}`}>item: {props.remainderText}
            <span className='dueDate'>due Date: {props.dueDate}</span>
            <span className='isComplete'>
                Completed:<input type='checkbox'
                                 className=''
                                checked={props.isComplete}
                                onChange={handleChange} />
            </span>
        </div>
    );
}
Remainder.propTypes = {
    remainderText: PropTypes.string,
    dueDate: PropTypes.string,
    isComplete: PropTypes.bool
}
const date = new Date();
const formattedDate = date.toISOString().substring(0,10);

Remainder.defaultProps = {
    remainderText:"No Remainder Set",
    dueDate: formattedDate,
    isComplete:false
}



export default Remainder
