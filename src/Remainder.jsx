import PropType from 'prop-types'

function Remainder(props){
    return (
        <div>item: {props.remainderText}
             dueDate: {props.dueDate}
             Completed?: {String(props.isComplete)}
        </div>
    );
}
const date = new Date();
const formattedDate = date.toISOString().substring(0,10);

Remainder.defaultProps = {
    remainderText:"No Remainder Set",
    dueDate: formattedDate,
    isComplete:false
}



export default Remainder
