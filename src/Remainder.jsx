import PropTypes from 'prop-types'

function Remainder(props){
    return (
        <div>item: {props.remainderText}
             dueDate: {props.dueDate}
             Completed?: {String(props.isComplete)}
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
