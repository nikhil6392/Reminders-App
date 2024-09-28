import PropTypes from 'prop-types'

function Remainder(props){
    function handleChange(){
        props.setIsComplete(!props.isComplete,props.id);
    }
    return (
        <div className='item'>item: {props.remainderText}
            <span className='dueDate'>due Date: {props.dueDate}</span>
            <span className='isComplete'>
                Completed?:<input type='checkbox'
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
